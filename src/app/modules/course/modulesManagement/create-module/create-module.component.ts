import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ModuleService } from '@app/core/services/module.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {
  moduleForm: FormGroup;
  labels = ['number', 'title', 'lockedUntil'];
  courseId: number;
  submitted = false;
  todayDate: Promise<string>|null = null;

  constructor(private router: Router, private route: ActivatedRoute, private moduleService: ModuleService, private fb: FormBuilder) {
    this.moduleForm = this.fb.group({
      number: ['', Validators.required],
      title: ['', Validators.required],
      lockedUntil: ['']
    });
   }


  get m() { return this.moduleForm.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("params id create: " + params.id);
    })
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.todayDate = new Promise((resolve, reject) => { resolve(mm + '/' + dd + '/' + yyyy)});

    this.moduleForm.get('lockedUntil').patchValue(mm + '/' + dd + '/' + yyyy);
  }

  addModule(number, title, lockedUntil) {
    this.submitted = true;

    let today = new Date(lockedUntil);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    lockedUntil = yyyy + '-' + mm + '-' + dd;

    this.moduleForm.get('lockedUntil').clearValidators();
    this.moduleForm.get('lockedUntil').updateValueAndValidity();

    console.log("going to submit lockedUntil: " + lockedUntil);
    if(!this.moduleForm.valid){
      console.log("invalid");
      return;
    } else if(this.moduleForm.get('lockedUntil').value == ""){
      console.log("empty locked until value");
      return;
    }

    this.moduleService.addModule(this.courseId, number, title, lockedUntil).subscribe(() => {
      //this.router.navigate(['/admin']);
      alert("Added module successfully!");
    });
  }

  onDateSelect(event){
    this.todayDate = new Promise((resolve, reject) => { resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year); });
  }

}
