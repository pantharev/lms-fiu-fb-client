import { TestBed } from '@angular/core/testing';

import { GlobalAnnouncementService } from './global-announcement.service';

describe('GlobalAnnouncementService', () => {
  let service: GlobalAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
