import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEditComponent } from './home-edit.component';

describe('HomeEditComponent', () => {
  let component: HomeEditComponent;
  let fixture: ComponentFixture<HomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
