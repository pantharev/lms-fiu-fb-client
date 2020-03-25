import { Component, OnInit } from '@angular/core';

import { AnnouncementService } from '@app/core/services/announcement.service';

@Component({
  selector: 'app-view-created-announcements',
  templateUrl: './view-created-announcements.component.html',
  styleUrls: ['./view-created-announcements.component.scss']
})
export class ViewCreatedAnnouncementsComponent implements OnInit {

  announcements;
  announcementSet: Set<number> = new Set<number>();

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {

    //this.announcements = this.announcementService.fetchAnnouncements();
    this.announcementService.fetchAnnouncements().subscribe((announcements: any[]) => {
      announcements.forEach((value, i, arr) => {
        this.announcementSet.add(value.announcement_id);
        let trimmedContent = value.content.substring(0, 25);
        value.content = trimmedContent;
      })
      this.announcementSet.forEach((value) => {
        console.log(value);
      })
      this.announcements = announcements; 
      console.log(announcements);
    });
  }

}
