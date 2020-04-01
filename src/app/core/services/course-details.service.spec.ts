import { TestBed } from '@angular/core/testing';

import { CourseDetailsService } from './course-details.service';

describe('CourseDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseDetailsService = TestBed.get(CourseDetailsService);
    expect(service).toBeTruthy();
  });
});
