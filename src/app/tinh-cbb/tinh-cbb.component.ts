import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs"
import { Tinh } from '../tinh';
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

export class TinhCbbComponent implements ControlValueAccessor,OnInit  {
  @Input() tinhs: Tinh[] = [];
  constructor(
  ) { }

  ngOnInit(): void {
  }

  getTinhs(): void {
  }

  // implement ControlValueAccessor
  //for tinh
  private curTinhId: number;
  private curTinh: Tinh;
  _disabled: boolean;
  get disabled(){
    return this._disabled;
  }

  @Input() set disabled(value: boolean){
     this._disabled = value;
    // this.setDisabledState(this._disabled);
  };

  @Input() onChange: (tinh: any) => void
  =  function(){
    console.log("default onChange function be called !");
  }
  onTouched(): void{
    console.log("default onTouch function be called !");
  };

  writeValue(obj: any) {
    this.curTinh = obj;
  }

  registerOnChange(fn: any) {
    console.log("Register on Change !");
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    console.log("setDisable be call in Tinh cbb");
    this.disabled= isDisabled;
  }
  //
  isSelect(tinhId: number): boolean{
    return !this.curTinh ? false : (tinhId === this.curTinh.id);
  }
  handleOnTinhChange(e) {
    console.log("handle one Change Tinh cbvb")
    const tinhId = parseInt(e.target.value);
    this.curTinhId = tinhId;
    console.log(tinhId);
    const tinhSelect = this.tinhs.find(tinh => tinh.id === tinhId);
    this.writeValue(tinhSelect);
    this.onChange(tinhSelect);
    console.log("tinhSelect:", tinhSelect);
  }

}
