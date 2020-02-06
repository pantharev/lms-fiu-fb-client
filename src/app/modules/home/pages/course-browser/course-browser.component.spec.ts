import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBrowserComponent } from './course-browser.component';

describe('CourseBrowserComponent', () => {
  let component: CourseBrowserComponent;
  let fixture: ComponentFixture<CourseBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
