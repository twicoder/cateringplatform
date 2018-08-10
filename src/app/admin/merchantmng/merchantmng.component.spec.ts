import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantmngComponent } from './merchantmng.component';

describe('MerchantmngComponent', () => {
  let component: MerchantmngComponent;
  let fixture: ComponentFixture<MerchantmngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantmngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
