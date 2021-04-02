import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { TinhService } from '../tinh.service';
import { Observable, of } from "rxjs"
import { Huyen } from '../huyen';
import {Input, Output, forwardRef, EventEmitter} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-huyen-cbb',
  templateUrl: './huyen-cbb.component.html',
  styleUrls: ['./huyen-cbb.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HuyenCbbComponent),
      multi: true
    }
  ]
})
export class HuyenCbbComponent implements OnInit,ControlValueAccessor {
  @Input() huyens: Huyen[] = [];
  constructor(
  ) {

  }

  ngOnInit(): void {
  }

  private curHuyenid: number;
  private curHuyen: Huyen;
  _disabled: boolean;
  get disabled(){
    return this._disabled;
  }
  @Input() set disabled(value: boolean){
     this._disabled = value;
  };

  onChange: (huyen: any) => void
  =  function(){
    console.log("default onChange function be called !");
  }
  onTouched(): void{
    console.log("default onTouch function be called !");
  };

  writeValue(obj: any) {
    console.log("CVA: WriteValue in HuyenCBB!");
    this.curHuyen = obj;
  }

  registerOnChange(fn: any) {
    console.log("Register on Change !");
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    console.log("Register on Touch !");
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    console.log("setDisable be call in Tinh cbb");
    this.disabled = isDisabled;
  }
  //
  isSelect(tinhId: number): boolean{
    return !this.curHuyen ? false : (tinhId === this.curHuyen.id);
  }
  handleOnHuyenChange(e) {
    console.log("handle Huyen onChange");
    const huyenId = parseInt(e.target.value);
    this.curHuyenid = huyenId;
    console.log(this.curHuyenid);
    const tinhSelect = this.huyens.find(huyen => huyen.id === huyenId);
    this.writeValue(tinhSelect);
    this.onChange(tinhSelect);
  }


}
