import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhDataControllerComponent } from './tinh-data-controller.component';

describe('TinhDataControllerComponent', () => {
  let component: TinhDataControllerComponent;
  let fixture: ComponentFixture<TinhDataControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinhDataControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhDataControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
