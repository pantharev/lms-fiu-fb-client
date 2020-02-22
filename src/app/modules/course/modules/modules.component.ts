import { Component, ElementRef, OnInit, Sanitizer, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NgbModal, NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { PdfService } from '@app/core/services/pdf.service';
import { VideoService } from '@app/core/services/video.service';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { User } from '@app/core/models/user';

import { ModuleService } from 'src/app/core/services/module.service';
import { throwToolbarMixedModesError } from '@angular/material';

//import videojs from 'videojs-youtube';
import videojs from 'video.js';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  currentUser: User;
  modules = [];
  linksFromDB: string[] = new Array();
  links: string[] = new Array();
  safeLinks = new Map<number, Object[]>();
  pdfsFromDB: Blob[] = new Array();
  pdfs: any[] = new Array();
  safePdfs = new Map<number, Object[]>();
  resources = ['pdf1', 'pdf2', 'worddoc1'];
  quizzes = ['quiz1', 'quiz2', 'quiz3'];
  urlPath;
  courseId;
  toggleContent = [];
  moduleVideosFetched = [];
  modulePDFsFetched = [];
  videoForm: FormGroup;
  pdfForm: FormGroup;
  updateVideoForm: FormGroup;
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

  constructor(private moduleService: ModuleService, private videoService: VideoService, private pdfService: PdfService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private sanitizer: DomSanitizer, private modalService: NgbModal) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.makeVideoForms();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("param id is: " + params.id);
    })
    this.fetchModules(this.courseId);
  }

  // BEGIN UTILITY FUNCTIONS
  makeVideoForms() {
    this.videoForm = this.fb.group({
      link: ['', Validators.required]
    });
    this.updateVideoForm = this.fb.group({
      linkInput: ['', Validators.required]
    });
    this.pdfForm = this.fb.group({
      pdf: ['', Validators.required]
    });
  }

  pushLinksToArray(linksFromDB, links) {
    linksFromDB.forEach((val, i, arr) => {
      links.push({link: arr[i].link, module_id: arr[i].module_id, video_id: arr[i].video_id});
      console.log("Links array: " + JSON.stringify(links));
    })
  }

  updateVideoUrl(linksArr, moduleId) {
    console.log("updateVideoUrl");
    console.log("linksArr size: " + linksArr.length);
    //this.moduleVideosFetched[moduleId] = true;
    linksArr.forEach((val, i: number, arr: []) => {
      if(val.module_id == moduleId){
        this.moduleVideosFetched[moduleId] = true;
        console.log("val: " + i + " " + JSON.stringify(val));
        let id = val.link.substring(32, 43);
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
        console.log("safeLinks: " + JSON.stringify(this.safeLinks.get(moduleId)));
        console.log("safeLinks size: " + this.safeLinks.size);
      }
    })
  }

  pushPDFsToArray(pdfsFromDB, pdfs) {
    pdfsFromDB.forEach((val, i, arr) => {
      console.log("val : " + i + " " + val);
      let pdfData = val.pdf.data;
      //console.log(Array.isArray(pdfData));
      let myBuffer = Uint8Array.from(pdfData);

      console.log(myBuffer);

      let blob = new Blob([myBuffer.buffer], { type: 'application/pdf' });
      //console.log(blob.size);
      //console.log(blob);
      pdfs.push({ module_id: val.module_id, pdf_id: val.pdf_id, pdf: blob });
      console.log("pdfs: " + JSON.stringify(pdfs));
    })
  }

  updatePdfData(pdfsArr, moduleId) {
    console.log("pdfsArr size: " + pdfsArr.length);
    //this.modulePDFsFetched[moduleId] = true;
    pdfsArr.forEach((val, i: number, arr) => {
      if(val.module_id == moduleId) {
        this.modulePDFsFetched[moduleId] = true;
        console.log("val: " + i + " " + JSON.stringify(val));
        let pdfObject = {};
        let cleanPDF: SafeResourceUrl;

        let pdfURL = URL.createObjectURL(val.pdf);
        console.log(pdfURL);
        cleanPDF = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);

        pdfObject = {
          pdf_id: val.pdf_id,
          pdf: cleanPDF
        }

        if(this.safePdfs.get(moduleId)){
          this.safePdfs.get(moduleId).push(pdfObject);
        } 
        else {
          this.safePdfs.set(moduleId, [pdfObject]);
        }
        console.log("safePdfs: " + JSON.stringify(this.safePdfs.get(moduleId)));
        console.log("safePdfs size: " + this.safePdfs.size);
      }
    })
  }
      
  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
      
  openModule(index) {
    console.log("Opening module content");
    if(this.toggleContent[index]){
      this.toggleContent[index] = false;
    }
    else {
      this.toggleContent[index] = true;
    }   
  }

  openUpdateVideo(content, videoUrl) {
    this.modalService.open(content, { size: 'lg', centered: true });
    this.updateVideoForm.get('linkInput').setValue(videoUrl);
  }
  // END UTILITY FUNCTIONS

  // BEGIN MODULES CRUD
  createModule(courseId) {
    this.router.navigate([`courses/${courseId}/create-module`]);
  }

  fetchModules(courseId) {
    this.moduleService.getModulesByCourseId(courseId).subscribe((data: []) => {
      this.modules = data;
      console.log(this.modules);
      this.fetchVideos(courseId, data);
      this.fetchPdfs(courseId, data);
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
  addVideo(link, moduleId) {
    this.videoService.addVideo(link, moduleId).subscribe(() => {
      alert("Added video");
    })
  }

  updateVideo(link, videoId) {
    console.log("link: " + link + " " + "videoId: " + videoId);
    this.videoService.updateVideo(link, videoId).subscribe(() => {
      alert("Updated video");
    })
  }

  deleteVideo(videoId) {
    console.log("Delete video: " + videoId);
    let r = confirm("Delete video: are you sure?");
    if(r){
      this.videoService.deleteVideo(videoId).subscribe(() => {
        alert("Deleted video");
      })
    }
  }

  fetchVideos(courseId, modules) {
    console.log("Fetching content: " + courseId);
    this.videoService.fetchVideos(courseId).subscribe((data: any[]) => {
      this.linksFromDB = data;
      console.log("linksFromDB: " + JSON.stringify(this.linksFromDB));
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
              console.log(val.module_id);
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

  addPdf(moduleId) {
    console.log("fileName: " + this.pdfForm.get('pdf').value.name + " fileSize: " + this.pdfForm.get('pdf').value.size);
    const formData: FormData = new FormData();
    formData.append('fileKey', this.pdfForm.get('pdf').value);
    formData.append('fileKey', moduleId);
    console.log(formData.getAll('fileKey'));
    this.pdfService.addPDF(formData).subscribe(
      (res) => {console.log(res); alert("Added PDF!"); },
      (err) => console.log(err)
    );
  }

  fetchPdfs(courseId, modules) {
    this.pdfService.fetchPDFs(courseId).subscribe((data: any[]) => {
      console.log(data);
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
              console.log(val.module_id);
              this.updatePdfData(this.pdfs, val.module_id);
            }
          }
        }
      })

    })
  }

}
