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

  constructor(private router: Router, private route: ActivatedRoute, private moduleService: ModuleService, private fb: FormBuilder) {
    this.moduleForm = this.fb.group({
      number: ['', Validators.required],
      title: ['', Validators.required],
      lockedUntil: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      console.log("params id create: " + params.id);
    })
  }

  get m() { return this.moduleForm.controls; }

  addModule(number, title, lockedUntil) {
    this.submitted = true;

    if(!this.moduleForm.valid){
      //alert('Missing required fields!');
      //this.submitted = false;
      return;
    }

    this.moduleService.addModule(this.courseId, number, title, lockedUntil).subscribe(() => {
      //this.router.navigate(['/admin']);
      alert("Added module successfully!");
    });
  }

}
