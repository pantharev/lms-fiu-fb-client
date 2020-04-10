import { Component, ElementRef, OnInit, Sanitizer, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NgbModal, NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { PdfService } from '@app/core/services/pdf.service';
import { VideoService } from '@app/core/services/video.service';
import { SurveyService } from '@app/core/services/survey.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { StudentCourseService } from '@app/core/services/student-course.service';
import { ModuleService } from 'src/app/core/services/module.service';

import { User } from '@app/core/models/user';
import decode from 'jwt-decode';

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { resolve } from 'url';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  currentUser: User;
  tokenPayload: User;
  isAdmin: Boolean;
  isInstructor: Boolean;
  isStudent: Boolean;

  modules = [];
  todayDate;
  moduleLocked: Boolean[] = [];

  linksFromDB: string[] = new Array();
  links: string[] = new Array();
  safeLinks = new Map<number, Object[]>();

  pdfsFromDB: Blob[] = new Array();
  pdfs: any[] = new Array();
  safePdfs = new Map<number, Object[]>();

  surveysFromDB: string[] = new Array();
  surveys: string[] = new Array();
  safeSurveys = new Map<number, Object[]>();

  resources = ['pdf1', 'pdf2', 'worddoc1'];
  quizzes = ['quiz1', 'quiz2', 'quiz3'];

  points: number;
  progress;  // Points as a percentage of totalpoints
  totalPoints;
  averagePoints;
  averageProgress;
  urlPath;
  courseId;
  courseIdPromise: Promise<string>;
  toggleContent = [];
  moduleVideosFetched = [];
  modulePDFsFetched = [];
  moduleSurveysFetched: Boolean[] = [];

  videoForm: FormGroup;
  pdfForm: FormGroup;
  surveyForm: FormGroup;
  updateVideoForm: FormGroup;
  updatePdfForm: FormGroup;
  updateSurveyForm: FormGroup;
  submitted = false;
  error = '';
  invalidLink = false;
  validLink = false;
  invalidQuiz = false;
  validQuiz = false;

  fileToUpload: File = null;
  contentObject = {
    course_id: 0,
    course_name: "",
    module_id: 0,
    module_number: 0,
    module_title: "",
    lockedUntil: "",
    link: ""
  }

  waitForProgressBarTimeout;

  constructor(
    private moduleService: ModuleService,
    private videoService: VideoService, 
    private pdfService: PdfService, 
    private surveyService: SurveyService,
    private authenticationService: AuthenticationService, 
    private studentCourseService: StudentCourseService,
    private fb: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute, 
    private sanitizer: DomSanitizer, 
    private modalService: NgbModal
    ) 
    {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.makeForms();
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      this.courseIdPromise = new Promise((resolve, reject) => {
        if (params.id) {
          resolve(params.id);
        } else {
          reject("couldn't find course id");
        }
      });
      console.log("param id is: " + params.id);
    })
    /*if(!this.currentUser){
      return;
    }*/
    this.todayDate = new Date();
    //console.log(this.todayDate.toLocaleString());
    //this.tokenPayload = decode(this.currentUser.token);
    this.isAdmin = (this.currentUser.role === "admin");
    this.isInstructor = (this.currentUser.role === "instructor");
    this.isStudent = (this.currentUser.role === "student");

    this.fetchModules(this.courseId);
    this.getAvgStudentPoints(this.courseId, this.currentUser.id);
    //this.getMaxPoints(this.courseId);   // Fetch the max possible points, for calculating progress %

    //this.waitForProgressBar();

    console.log("getting max points");
    this.surveyService.fetchSurveys(this.courseId).subscribe((surveys) => {

      let numSurveys = Object.keys(surveys).length;
      console.log("Num surveys: " + numSurveys);
      if (numSurveys == null || numSurveys == 0) {
        this.totalPoints = 1; // Avoid divide by 0 later in function
      }
      else {
        // For now, the total points in the course is equal to 20 per survey. This can be changed later when we can retrieve
        // the total points for each Qualtrics quiz. 
        this.totalPoints = numSurveys * 20;
      }
      console.log("Max points set to " + this.totalPoints);

      this.studentCourseService.getStudentsByCourseId(this.courseId).subscribe((data: []) => {
        data.forEach((val: any, i, arr) => {
          if (val.student_id == this.currentUser.id) {
            //console.log("Got student: " + JSON.stringify(val));
            this.points = val.points;
            this.progress = this.toFixed(((val.points / this.totalPoints) * 100),2);
            console.log("Points: " + this.points);
            console.log("Points as %: " + this.progress);
            console.log("Calculation: " + this.points + "/" + this.totalPoints);
            //document.getElementById('progressbar').style.width = this.points + "%";
          }
        })
      })
    })

  }

  ngOnDestroy() {
    //clearTimeout(this.waitForProgressBarTimeout);
  }

  // BEGIN UTILITY FUNCTIONS

  waitForProgressBar(){
    console.log("waiting for progress bar");
    if(document.getElementById('progressbarAvg')){
      document.getElementById('progressbarAvg').style.width = this.averagePoints.average + "%";
    }
    else{
      this.waitForProgressBarTimeout = setTimeout(() => {
        this.waitForProgressBar();
      }, 1000)
    }
  }

  makeForms() {
    this.videoForm = this.fb.group({
      link: ['', Validators.required]
    });
    this.updateVideoForm = this.fb.group({
      linkInput: ['', Validators.required]
    });
    this.pdfForm = this.fb.group({
      pdf: ['', Validators.required]
    });
    this.updatePdfForm = this.fb.group({
      pdf: ['', Validators.required]
    });
    this.surveyForm = this.fb.group({
      name: ['', Validators.required],
      link: ['', Validators.required]
    });
    this.updateSurveyForm = this.fb.group({
      name: ['', Validators.required],
      link: ['', Validators.required]
    })
  }

  // convenience gettera for easy access to form fields
  get v() { return this.videoForm.controls; }

  get p() { return this.pdfForm.controls; }

  get s() { return this.surveyForm.controls; }

  get vu() { return this.updateVideoForm.controls; }

  get pu() { return this.updatePdfForm.controls; }

  get su() { return this.updateSurveyForm.controls; }

  pushLinksToArray(linksFromDB: any[], links: any[]) {
    linksFromDB.forEach((video) => {
      let videoObject = {
        link: video.link, 
        module_id: video.module_id, 
        video_id: video.video_id
      }
      links.push(videoObject);
    })
  }

  updateVideoUrl(linksArr: any[], moduleId: number) {
    linksArr.forEach((val) => {
      if(val.module_id === moduleId){
        this.moduleVideosFetched[moduleId] = true;

        //console.log("link: " + val.link);
        let len: number = val.link.length;
        let id;
        if(len >= 43){
          id = val.link.substring(32, 43);
        }
        else if(len == 28){
          id = val.link.substring(17, 28)
        }
        let videoUrl: SafeResourceUrl;
        let url: string;
        let videoObject = {};
        url = 'https://www.youtube.com/embed/' + id;
        videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        videoObject = {
          videoUrl: videoUrl,
          video_id: val.video_id,
          url: val.link
        }
        if(this.safeLinks.get(moduleId)){
          this.safeLinks.get(moduleId).push(videoObject);
        }
        else {
          this.safeLinks.set(moduleId, [videoObject]);
        }
      }
    })
  }

  pushPDFsToArray(pdfsFromDB: any[], pdfs: any[]) {
    pdfsFromDB.forEach((val) => {
      //console.log("val : " + i + " " + JSON.stringify(val));
      let pdfData = val.pdf.data;
      //console.log(Array.isArray(pdfData));
      let myBuffer = Uint8Array.from(pdfData);

      //console.log(myBuffer);

      let blob = new Blob([myBuffer.buffer], { type: 'application/pdf' }); //application/octet-stream
      //console.log(blob.size);
      //console.log(blob);
      let pdfObject = {
        module_id: val.module_id, 
        pdf_id: val.pdf_id, 
        pdf: blob
      }
      pdfs.push(pdfObject);
    })
  }

  updatePdfData(pdfsArr: any[], moduleId: number) {
    pdfsArr.forEach((val) => {
      if(val.module_id === moduleId) {
        this.modulePDFsFetched[moduleId] = true;
        
        let pdfObject = {};
        let cleanPDF: SafeResourceUrl;

        let pdfURL = URL.createObjectURL(val.pdf);
        
        cleanPDF = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);

        pdfObject = {
          pdf_id: val.pdf_id,
          pdf: cleanPDF,
          rawPdf: val.pdf
        }

        if(this.safePdfs.get(moduleId)){
          this.safePdfs.get(moduleId).push(pdfObject);
        } 
        else {
          this.safePdfs.set(moduleId, [pdfObject]);
        }
      }
    })
  }

  pushSurveysToArray(surveysFromDB: any[], surveys: any[]){
    surveysFromDB.forEach((survey) => {
      let surveyObject = {
        name: survey.survey_name, 
        link: survey.link, 
        module_id: survey.module_id, 
        survey_id: survey.survey_id
      }
      surveys.push(surveyObject);
    })
  }

  updateSurveyUrl(surveysArr: any[], moduleId: number) {
    surveysArr.forEach((survey) => {
      if(survey.module_id === moduleId){
        this.moduleSurveysFetched[moduleId] = true;

        let surveyUrl: SafeResourceUrl;
        let surveyWithEmailUrl = survey.link;

        this.courseIdPromise.then((id) => {
          let courseId = parseInt(id, 10);
          console.log(courseId);

          surveyWithEmailUrl = survey.link + '?email=' + this.currentUser.email + '&course=' + courseId;
          //console.log(surveyWithEmailUrl);
          surveyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(surveyWithEmailUrl);
          let surveyObject = {
            surveyUrl: surveyUrl,
            survey_id: survey.survey_id,
            name: survey.name,
            url: survey.link
          }
  
          if(this.safeSurveys.get(moduleId)){
            this.safeSurveys.get(moduleId).push(surveyObject);
          }
          else {
            this.safeSurveys.set(moduleId, [surveyObject]);
          }  
        });
      }
    })
  }
      
  open(content) {
    this.submitted = false;
    this.invalidLink = false;
    this.invalidQuiz = false;
    this.validLink = false;
    this.invalidQuiz = false;
    this.modalService.open(content, { size: 'lg', centered: true });
  }
      
  openModule(index) {
    if(this.toggleContent[index]){
      //console.log("Closing module content");
      this.toggleContent[index] = false;
    }
    else {
      //console.log("Opening module content");
      this.toggleContent[index] = true;
    }   
  }

  openUpdateVideo(content, videoUrl) {
    this.submitted = false;
    this.invalidLink = false;
    this.validLink = false;
    this.modalService.open(content, { size: 'lg', centered: true });
    this.updateVideoForm.get('linkInput').setValue(videoUrl);
  }

  openUpdatePDF(content, pdf){
    this.submitted = false;
    this.modalService.open(content, { size: 'lg', centered: true });
    console.log("The updatePDF: " + pdf);
    //this.updatePdfForm.get('pdf').setValue(pdf);
  }

  openUpdateSurvey(content, surveyName, surveyUrl){
    this.submitted = false;
    this.invalidQuiz = false;
    this.validQuiz = false;
    this.modalService.open(content, { size: 'lg', centered: true });
    this.updateSurveyForm.get('name').setValue(surveyName);
    this.updateSurveyForm.get('link').setValue(surveyUrl);
  }

  getAvgStudentPoints(courseId, studentId){
    console.log("Called avgstudentpoints on student_id: " + studentId);
    this.studentCourseService.getAvgStudentPoints(courseId, studentId).subscribe((data) => {
      this.averagePoints = data;
      console.log("avg: " + JSON.stringify(data));
      this.averagePoints.average = this.toFixed(this.averagePoints.average, 2);
      this.averageProgress = this.toFixed(((this.averagePoints.average / this.totalPoints)*100), 2);
    })
  }

  toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
  }

  viewDiscussion(courseId, moduleId){
    this.router.navigate([`courses/${courseId}/discussion/${moduleId}`]);
  }
  // END UTILITY FUNCTIONS

  // BEGIN MODULES CRUD
  createModule(courseId) {
    this.router.navigate([`courses/${courseId}/create-module`]);
  }

  fetchModules(courseId) {
    this.moduleService.getModulesByCourseId(courseId).subscribe((data: []) => {
      data.forEach((moduleO: any, i, arr) => {
        //let lockedUntil = new Date(moduleO.lockedUntil.toString());
        let lockedUntil = new Date(moduleO.lockedUntil);
        let dd = String(lockedUntil.getDate() + 1).padStart(2, '0');
        let mm = String(lockedUntil.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = lockedUntil.getFullYear();

        let givenDate = mm + '/' + dd + '/' + yyyy;
        this.moduleLocked[i] = false;
        if(this.todayDate < lockedUntil){
          //console.log(this.todayDate.toLocaleDateString() + " < " + JSON.stringify(moduleO));
          this.moduleLocked[i] = true;
        }
        moduleO.lockedUntil = givenDate;
      })
      this.modules = data;
      //console.log(this.modules);
      this.fetchVideos(courseId, data);
      this.fetchPdfs(courseId, data);
      this.fetchSurveys(courseId, data);
    })
  }

  editModule(courseId, moduleId) {
    this.router.navigate([`courses/${courseId}/edit-module/${moduleId}`]);
  }

  deleteModule(moduleId, moduleNumber) {
    let response = confirm(`Delete Module ${moduleNumber}: Are you sure?`);
    if(response == true){
      this.moduleService.deleteModule(moduleId).subscribe(() => {
        console.log("Deleted module " + moduleId);
        //this.modules.pop();
      });
      const item = this.modules.find(item => item.id === moduleId);
      this.modules.splice(this.modules.indexOf(item));
      }
  }
  // END MODULES CRUD

  // BEGIN VIDEOS CRUD

  handleValidLink(event){
    //console.log(event.target.value);
    let input: String = event.target.value;
    let isYoutubeLink: Boolean = false;
    let len = input.length;

    if(input.includes("https://www.youtube.com/watch?v=") || input.includes("https://youtu.be/")){
      console.log("Includes youtube link");
      isYoutubeLink = true;
    } else{
      isYoutubeLink = false;
    }

    if((len == 28 || len >= 43) && isYoutubeLink){
      this.validLink = true;
      this.invalidLink = false;
    }
    else{
      this.validLink = false;
    }
  }

  addVideo(link, moduleId) {
    this.submitted = true;

    if(this.videoForm.invalid){
      return;
    }

    if(!this.validLink){
      this.invalidLink = true;
      return;
    }

    this.videoService.addVideo(link, moduleId).subscribe((data) => {
      alert("Added video");
    }, (error) => {
      this.error = error;
    })
  }

  updateVideo(link, videoId) {
    this.submitted = true;

    if(this.updateVideoForm.invalid){
      return;
    }

    if(!this.validLink){
      this.invalidLink = true;
      return;
    }

    //console.log("link: " + link + " " + "videoId: " + videoId);
    this.videoService.updateVideo(link, videoId).subscribe(() => {
      alert("Updated video");
    })
  }

  deleteVideo(videoId, videoNumber: number) {
    //console.log("Delete video: " + videoId);
    let r = confirm("Delete video " + (videoNumber + 1) + ": Are you sure?");
    if(r){
      this.videoService.deleteVideo(videoId).subscribe(() => {
        alert("Deleted video");
      })
    }
  }

  fetchVideos(courseId, modules) {
    console.log("Fetching videos: " + courseId);
    this.videoService.fetchVideos(courseId).subscribe((data: any[]) => {
      this.linksFromDB = data;
      //console.log("linksFromDB: " + JSON.stringify(this.linksFromDB));
      this.pushLinksToArray(data, this.links);

      modules.forEach((val: any, i, arr) => {
        let moduleval = val;
        for(let i = 0; i < data.length; i++) {
          let val = data[i];
          if(val.module_id == moduleval.module_id){
            if(this.moduleVideosFetched[val.module_id] == true){
              console.log("Modules videos fetched true");
              break;
            }
            else{
              //console.log(val.module_id);
              this.updateVideoUrl(this.links, val.module_id);
            }
          }
        }
      })

    })
  }
  // END VIDEOS CRUD

  // BEGIN PDFS CRUD

  handleFileInput(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.pdfForm.get('pdf').setValue(file);
    }
  }

  handleFileInputUpdate(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.updatePdfForm.get('pdf').setValue(file);
    }
  }

  addPdf(moduleId) {
    this.submitted = true;

    if(this.pdfForm.invalid){
      return;
    }

    //console.log("fileName: " + this.pdfForm.get('pdf').value.name + " fileSize: " + this.pdfForm.get('pdf').value.size);
    const formData: FormData = new FormData();
    formData.append('fileKey', this.pdfForm.get('pdf').value);
    formData.append('fileKey', moduleId);
    //console.log(formData.getAll('fileKey'));
    this.pdfService.addPDF(formData).subscribe(
      (res) => { console.log(res); alert("Added PDF!"); },
      (err) => { console.log(err); this.error = err; }
    );
  }

  fetchPdfs(courseId, modules) {
    console.log("Fetching pdfs: " + courseId);
    this.pdfService.fetchPDFs(courseId).subscribe((data: any[]) => {
      //console.log(data);
      this.pdfsFromDB = data;
      this.pushPDFsToArray(data, this.pdfs);

      modules.forEach((val: any, i, arr) => {
        let moduleval = val;
        for(let i = 0; i < data.length; i++) {
          let val = data[i];
          if(val.module_id == moduleval.module_id){
            if(this.modulePDFsFetched[val.module_id] == true){
              console.log("Modules pdfs fetched true");
              break;
            }
            else{
              //console.log(val.module_id);
              this.updatePdfData(this.pdfs, val.module_id);
            }
          }
        }
      })

    })
  }

  updatePDF(pdfId, moduleId){
    this.submitted = true;

    if(this.updatePdfForm.invalid){
      return;
    }

    //console.log("updatePDF");
    const formData: FormData = new FormData();
    formData.append('fileKey', this.updatePdfForm.get('pdf').value);
    formData.append('fileKey', moduleId);
    this.pdfService.updatePDF(pdfId, formData).subscribe(() => {
      alert("Updated pdf");
    });
  }

  deletePDF(pdfId, pdfNumber: number) {
    //console.log("PDF ID: " + pdfId);
    let r = confirm("Delete PDF " + (pdfNumber + 1) + ": Are you sure?");
    if(r){
      this.pdfService.deletePDF(pdfId).subscribe(() => {
        alert("Deleted pdf");
      })
    }
  }

  // END PDFS CRUD

  // BEGIN SURVEYS CRUD (QUIZZES/EXAMS)

  handleValidQuiz(event){
    let input: String = event.target.value;
    let len = input.length;
    let isValidQuiz: Boolean = false;

    if(input.includes("https://fiu.qualtrics.com/jfe/form/")){
      isValidQuiz = true;
    }
    else{
      isValidQuiz = false;
    }

    if((len == 53) && isValidQuiz){
      this.validQuiz = true;
      this.invalidQuiz = false;
    }
    else{
      this.validQuiz = false;
    }
  }

  addSurvey(name, link, moduleId) {
    this.submitted = true;

    if(this.surveyForm.invalid){
      return;
    }

    if(!this.validQuiz){
      this.invalidQuiz = true;
      return;
    }

    this.surveyService.addSurvey(name, link, moduleId).subscribe(() => {
      alert("Added survey");
    })
  }

  fetchSurveys(courseId, modules: any[]) {
    console.log("Fetching surveys: " + courseId);
    this.surveyService.fetchSurveys(courseId).subscribe((data: any[]) => {
      this.surveysFromDB = data;
      //console.log("surveysFromDB: " + JSON.stringify(this.surveysFromDB));
      this.pushSurveysToArray(data, this.surveys);

      modules.forEach((val: any) => {
        let moduleval = val;
        for(let i = 0; i < data.length; i++) {
          let val = data[i];
          if(val.module_id == moduleval.module_id){
            if(this.moduleSurveysFetched[val.module_id] == true){
              console.log("Modules surveys fetched true");
              break;
            }
            else{
              //console.log(val.module_id);
              this.updateSurveyUrl(this.surveys, val.module_id);
            }
          }
        }
      })

    })
  }

  updateSurvey(name, link, surveyId) {
    this.submitted = true;

    if(this.updateSurveyForm.invalid){
      return;
    }

    if(!this.validQuiz){
      this.invalidQuiz = true;
      return;
    }

    //console.log("link: " + link + " " + "videoId: " + videoId);
    this.surveyService.updateSurvey(name, link, surveyId).subscribe(() => {
      alert("Updated Quiz/Exam");
    })
  }

  deleteSurvey(surveyId, surveyNumber: number) {
    //console.log("Delete video: " + videoId);
    let r = confirm("Delete Quiz/Exam " + (surveyNumber + 1) + ": Are you sure?");
    if(r){
      this.surveyService.deleteSurvey(surveyId).subscribe(() => {
        alert("Deleted Quiz/Exam");
      })
    }
  }
  // END SURVEYS CRUD (QUIZZES/EXAMS)

}
