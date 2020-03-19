import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Module } from '@app/core/models/module.model';
import { ModuleService } from '@app/core/services/module.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {
  id: number;
  moduleNumber: number;
  module: Module;
  updateForm: FormGroup;
  submitted = false;
  startDate;
  givenDate;

  constructor(private moduleService: ModuleService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.CreateForm();
   }

   CreateForm() {
     this.updateForm = this.fb.group({
       number: ['', Validators.required],
       title: ['', Validators.required],
       lockedUntil: ['', Validators.required]
     })
   }

  get mu() { return this.updateForm.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.moduleId;
      this.moduleService.getModuleById(this.id).subscribe((res: Module) => {
        this.module = res[0];

        this.moduleNumber = this.module.number;
        //console.log(this.module);
        //console.log(this.module.id);

        this.updateForm.get('number').setValue(this.module.number);
        this.updateForm.get('title').setValue(this.module.title);
        this.updateForm.get('lockedUntil').setValue(this.module.lockedUntil);
        //this.givenDate = this.module.lockedUntil;
        let newDate = new Date(this.module.lockedUntil.toString());
        let dd = String(newDate.getDate() + 1).padStart(2, '0');
        let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = newDate.getFullYear();

        this.givenDate = mm + '/' + dd + '/' + yyyy;
        this.startDate = (""+this.module.lockedUntil).split("-");
        //console.log(this.startDate);
      })
    })
  }

  updateModule(number, title, lockedUntil) {
    this.submitted = true;

    let today = new Date(lockedUntil);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    lockedUntil = yyyy + '-' + mm + '-' + dd;

    //console.log("going to submit lockedUntil: " + lockedUntil);
    if(!this.updateForm.valid){
      return;
    }
      this.moduleService.updateModule(this.id, number, title, lockedUntil).subscribe(res => {
        alert('Module updated successfully');
      });
  }

  onDateSelect(event){
    this.givenDate = String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year;
  }

}
