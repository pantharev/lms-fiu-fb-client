import { TestBed } from '@angular/core/testing';

import { EmailNotificationService } from './email-notification.service';

describe('EmailNotificationService', () => {
  let service: EmailNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
