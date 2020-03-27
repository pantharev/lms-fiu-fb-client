import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AnnouncementService } from '@app/core/services/announcement.service';

@Component({
  selector: 'app-view-created-announcements',
  templateUrl: './view-created-announcements.component.html',
  styleUrls: ['./view-created-announcements.component.scss']
})
export class ViewCreatedAnnouncementsComponent implements OnInit {

  announcements;
  announcementSet: Set<number> = new Set<number>();
  groupedAnnouncements: Map<number, Object[]> = new Map<number, Object[]>();

  constructor(private announcementService: AnnouncementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //this.announcements = this.announcementService.fetchAnnouncements();
    this.announcementService.fetchAnnouncements().subscribe((announcements: any[]) => {
      announcements.forEach((value, i, arr) => {
        this.announcementSet.add(value.announcement_id);
        let trimmedContent = value.content.substring(0, 25);
        value.content = trimmedContent;
      })
      this.announcements = announcements; 
      console.log(announcements);
      this.announcementSet.forEach((announcementId) => {
        console.log(announcementId);
        this.announcements.forEach((announcementObj, i) => {
          if(announcementId == announcementObj.announcement_id){
            console.log("grouped");
            console.log(announcementObj);
            if(this.groupedAnnouncements.get(announcementId)){
              this.groupedAnnouncements.get(announcementId).push(announcementObj);
            }
            else {
              this.groupedAnnouncements.set(announcementId, [announcementObj]);
            }
            console.log(this.groupedAnnouncements.get(announcementId));
          }
        })
      })
    });
  }

  editAnnouncement(announcementId, announcements){
    console.log(announcementId);
    console.log("announcements: \n");
    console.log(announcements);
    this.announcementService.nextEditCourses(announcements);
    this.router.navigate(['../edit-announcement', announcementId], { relativeTo: this.route })
  }

  deleteAnnouncement(announcementId){
    let r = confirm("Delete announcement: " + announcementId + "\nAre you sure?");
    if(r){
      console.log("deleted: " + announcementId);
      this.announcementService.deleteAnnouncement(announcementId).subscribe(() => {
        alert("Deleted announcement: " + announcementId);
      })
    }
  }

}
