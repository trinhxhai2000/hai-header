import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiPageHeaderComponent } from './hai-page-header.component';

describe('HaiPageHeaderComponent', () => {
  let component: HaiPageHeaderComponent;
  let fixture: ComponentFixture<HaiPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaiPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
