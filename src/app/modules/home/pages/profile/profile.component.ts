import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData;
  pdfForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.pdfForm = this.fb.group({
      pdf: ['']
    })
   }

  ngOnInit() {
    /*this.authService.getProfile().subscribe((data) => {
      this.profileData = data;
      console.log(this.profileData);
      console.log("The profile data is: " + JSON.stringify(data));
    })*/

    /*this.authService.getTest().subscribe((data) => {
      this.testData = data;
      console.log(JSON.stringify(this.testData));
    })*/
  }

  handleFileInputUpdate(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.pdfForm.get('pdf').setValue(file);
    }
  }

  addPdf() {

    console.log("fileName: " + this.pdfForm.get('pdf').value.name + " fileSize: " + this.pdfForm.get('pdf').value.size);
    const formData: FormData = new FormData();
    formData.append(this.pdfForm.get('pdf').value.name, this.pdfForm.get('pdf').value);
    //formData.append('fileKey', moduleId);
    //console.log(formData.getAll('fileKey'));
    this.authService.uploadFile(formData).subscribe(
      (res) => { console.log(res); alert("Added PDF!"); },
      (err) => { console.log(err); }
    );
  }

}
