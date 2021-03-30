import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiSwitchComponent } from './hai-switch.component';

describe('HaiSwitchComponent', () => {
  let component: HaiSwitchComponent;
  let fixture: ComponentFixture<HaiSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
