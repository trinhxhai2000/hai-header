import { Component, OnInit } from '@angular/core';
import { forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-hai-switch',
  templateUrl: './hai-switch.component.html',
  styleUrls: ['./hai-switch.component.css'],
  providers: [
    {       provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HaiSwitchComponent),
            multi: true
    }
  ]
})
export class HaiSwitchComponent implements OnInit, ControlValueAccessor  {

  constructor() { }

  ngOnInit(): void {
  }

  // implement control value acces
  onChange: any = () => {}
  onTouch: any = () => {}

  isCheck :Boolean = false;
  isDisabled = false
  @Input() set readonly (value){
    this.isDisabled = value;
    this.setDisabledState(value);
  }

  set value(val){  // this value is updated by programmatic changes
    if( val !== undefined && this.isCheck !== val){
      this.isCheck = val
      this.onChange(val)
      this.onTouch(val)
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
  // this method sets the value programmatically
  writeValue(value: any){
    this.value = value
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any){
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}
