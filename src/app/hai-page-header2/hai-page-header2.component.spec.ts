import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiPageHeader2Component } from './hai-page-header2.component';

describe('HaiPageHeader2Component', () => {
  let component: HaiPageHeader2Component;
  let fixture: ComponentFixture<HaiPageHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiPageHeader2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaiPageHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
