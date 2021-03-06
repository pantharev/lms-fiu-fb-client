import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '@app/core/services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  announcements: Promise<any[]>;
  constructor(private announcementService: AnnouncementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.announcementService.fetchAnnouncementsByCourseId(params.id).subscribe((announcements: any[]) => {
        this.announcements = Promise.resolve(announcements);
        console.log(announcements);
      });
    })
  }

}
