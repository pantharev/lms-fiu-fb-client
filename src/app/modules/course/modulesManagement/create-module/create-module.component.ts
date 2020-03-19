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
  todayDate;

  constructor(private router: Router, private route: ActivatedRoute, private moduleService: ModuleService, private fb: FormBuilder) {
    this.moduleForm = this.fb.group({
      number: ['', Validators.required],
      title: ['', Validators.required],
      lockedUntil: ['', Validators.required]
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

    this.todayDate = mm + '/' + dd + '/' + yyyy;
  }

  get m() { return this.moduleForm.controls; }

  addModule(number, title, lockedUntil) {
    this.submitted = true;

    let today = new Date(lockedUntil);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    lockedUntil = yyyy + '-' + mm + '-' + dd;

    //console.log("going to submit lockedUntil: " + lockedUntil);
    if(!this.moduleForm.valid){
      return;
    }

    this.moduleService.addModule(this.courseId, number, title, lockedUntil).subscribe(() => {
      //this.router.navigate(['/admin']);
      alert("Added module successfully!");
    });
  }

  onDateSelect(event){
    this.todayDate = String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year;
  }

}
