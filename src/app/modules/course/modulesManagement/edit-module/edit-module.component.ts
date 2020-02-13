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
  startDate;

  constructor(private moduleService: ModuleService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.CreateForm();
   }

   CreateForm() {
     this.updateForm = this.fb.group({
       number: ['', Validators.required],
       title: ['', Validators.required],
       lockedUntil: ['']
     })
   }

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
        this.startDate = (""+this.module.lockedUntil).split("-");
        //console.log(this.startDate);
      })
    })
  }

  updateModule(number, title, lockedUntil) {
    if(this.updateForm.valid)
    this.moduleService.updateModule(this.id, number, title, lockedUntil).subscribe(res => {
      alert('Module updated successfully');
    });
    else alert('Missing required fields!');
  }

}
