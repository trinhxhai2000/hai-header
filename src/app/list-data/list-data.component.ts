import { Component, OnChanges, OnInit } from '@angular/core';
import { Tinh } from '../tinh';
import { Huyen } from '../huyen';
import {Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  defaultTinh: Tinh =  { id: -1, name: '', TTTTU: false };
  defaultHuyen: Huyen =  { id: -1, tinhId: -1, name: '' };

  // tmpTinh: Tinh = this.defaultTinh;
  _tmpTinh: Tinh = this.defaultTinh;
  set tmpTinh(value: Tinh){
    console.log("list-data : tmpTinh setter be called!");
    this._tmpTinh = value;
    this.curHuyens = this.huyens.filter(huyen => huyen.tinhId === value.id );
  }
  get tmpTinh():Tinh{
    return this._tmpTinh;
  }
  _tmpHuyen: Huyen = this.defaultHuyen;
  set tmpHuyen(value: Huyen){
    this._tmpHuyen = value;
  }
  get tmpHuyen():Huyen{
    return this._tmpHuyen;
  }

  // bind to child
  curTinhs: Tinh[] = []
  curHuyens: Huyen[] = []
  // bind from parent
  _tinhs: Tinh[]
  _huyens: Huyen[]
  @Input()
  set tinhs(values :Tinh[] ){
    this._tinhs = values
    this.curTinhs = values;
  }
  @Input()
  set huyens(values :Huyen[] ){
    this._huyens = values;
  }
  get huyens():Huyen[]{
    return this._huyens;
  }



}
