import { Component, OnInit } from '@angular/core';
import { TinhService } from '../tinh.service';
import { Observable, of } from "rxjs"
import { Tinh } from '../tinh';
import { Huyen } from '../huyen';
import {Input, Output, forwardRef, EventEmitter} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tinh-cbb',
  templateUrl: './tinh-cbb.component.html',
  styleUrls: ['./tinh-cbb.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TinhCbbComponent),
      multi: true
    }
  ]
})

export class TinhCbbComponent implements OnInit, ControlValueAccessor {
  tinhs: Tinh[] = [];
  constructor(
    private tinhService : TinhService
  ) { }

  ngOnInit(): void {
    this.getTinhs()
    this.getHuyen()
    this.filterHuyenByTinh(this.curTinhId);
    console.log(this.curTinh);
  }

  getTinhs(): void {
    this.tinhService.getTinhs()
      .subscribe(tinhs => this.tinhs = tinhs);
  }
  //huyen data
  huyens: Huyen[]
  curHuyens: Huyen[]
  getHuyen(){
    this.tinhService.getHuyens()
     .subscribe(huyens => this.huyens = huyens);
  }
  filterHuyenByTinh(tinhId: number){
    if (this.huyens !== undefined)
      this.curHuyens = this.huyens.filter( huyen => (tinhId !== undefined && huyen.tinhId == tinhId) );
    else{
      console.log("Huyen is UNDEFINED")
    }
  }

  // implement ControlValueAccessor

  private curTinhId: number;
  private curTinh: Tinh;
  isDisabled: boolean;
  onChange: (tinh: any) => void
  = function(){
    console.log("default onChange function be called !");
  };
  onTouched: () => void
  = function(){
    console.log("default onTouch function be called !");
  };

  writeValue(obj: any) {
    this.curTinh = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    console.log("shiet");
    this.isDisabled = isDisabled;

  }

  //
  isSelect(tinhId: number): boolean{
    return !this.curTinh ? false : (tinhId === this.curTinh.id);
  }
  handleOnTinhChange(e) {

    const tinhId = parseInt(e.target.value);
    this.curTinhId = tinhId;
    this.filterHuyenByTinh(this.curTinhId);
    console.log(tinhId);
    const tinhSelect = this.tinhs.find(tinh => tinh.id === tinhId);
    this.writeValue(tinhSelect);
    this.onChange(tinhSelect);
  }


}
