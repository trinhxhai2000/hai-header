import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhCbbComponent } from './tinh-cbb.component';

describe('TinhCbbComponent', () => {
  let component: TinhCbbComponent;
  let fixture: ComponentFixture<TinhCbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinhCbbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhCbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
