import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AnnouncementService } from '@app/core/services/announcement.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {

  announcementId: Promise<number>;
  announcement;
  constructor(private router: Router, private route: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.announcementId = Promise.resolve(params.announcementId);
    })

    this.announcementId.then((id) => {
      console.log(id);
      this.announcement = this.announcementService.fetchAnnouncementById(id);
    })
  }

}
