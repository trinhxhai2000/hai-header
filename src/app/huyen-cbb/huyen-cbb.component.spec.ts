import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuyenCbbComponent } from './huyen-cbb.component';

describe('HuyenCbbComponent', () => {
  let component: HuyenCbbComponent;
  let fixture: ComponentFixture<HuyenCbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuyenCbbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuyenCbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
