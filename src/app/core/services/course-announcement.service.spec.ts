import { TestBed } from '@angular/core/testing';

import { CourseAnnouncementService } from './course-announcement.service';

describe('CourseAnnouncementService', () => {
  let service: CourseAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
