import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationmngComponent } from './applicationmng.component';

describe('ApplicationmngComponent', () => {
  let component: ApplicationmngComponent;
  let fixture: ComponentFixture<ApplicationmngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationmngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
