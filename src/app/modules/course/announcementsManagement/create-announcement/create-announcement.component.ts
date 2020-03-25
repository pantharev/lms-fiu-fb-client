import { Component, OnInit } from '@angular/core';

import { AnnouncementService } from '@app/core/services/announcement.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent implements OnInit {

  checkedCourses: number[] = [];
  subscription: Subscription;
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.subscription = this.announcementService.sharedCheckedCourses.subscribe((checkedCourses: number[]) => {
      this.checkedCourses = checkedCourses;
      console.log(checkedCourses);
    }, (error) =>{
      console.log(error);
    }, () => {
      console.log("complete");
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
