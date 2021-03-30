import { Component, OnInit } from '@angular/core';
import { TinhService } from '../tinh.service';
import { Observable, of } from "rxjs"
import { Tinh } from '../tinh';
@Component({
  selector: 'app-tinh-cbb',
  templateUrl: './tinh-cbb.component.html',
  styleUrls: ['./tinh-cbb.component.css']
})
export class TinhCbbComponent implements OnInit {
  tinhs: Tinh[] = [];
  constructor(
    private tinhService : TinhService
  ) { }

  ngOnInit(): void {
    this.getTinhs()
  }
  getTinhs(): void {
    this.tinhService.getTinhs()
      .subscribe(tinhs => this.tinhs = tinhs);
  }

}
