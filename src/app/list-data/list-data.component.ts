import { Component, OnInit } from '@angular/core';
import { Tinh } from '../tinh';
import { Huyen } from '../huyen';
@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  defaultTinh: Tinh =  { id: -1, name: '', TTTTU: false };
  defaultHuyen: Huyen =  { id: -1, tinhId: -1, name: '' };

  tmpTinh: Tinh = this.defaultTinh;
  tmpHuyen: Huyen = this.defaultHuyen;

  constructor() { }

  ngOnInit(): void {
  }

}
