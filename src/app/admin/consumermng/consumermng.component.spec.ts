import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumermngComponent } from './consumermng.component';

describe('ConsumermngComponent', () => {
  let component: ConsumermngComponent;
  let fixture: ComponentFixture<ConsumermngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumermngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumermngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
