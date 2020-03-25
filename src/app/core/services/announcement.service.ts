import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private checkedCourses = new BehaviorSubject([0]);
  sharedCheckedCourses = this.checkedCourses.asObservable();

  constructor() { }

  nextCheckedCourses(checkedCourses: number[]){
    this.checkedCourses.next(checkedCourses);
  }
}
