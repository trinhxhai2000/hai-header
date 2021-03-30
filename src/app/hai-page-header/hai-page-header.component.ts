import { Component, OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hai-page-header',
  templateUrl: './hai-page-header.component.html',
  styleUrls: ['./hai-page-header.component.css']
})
export class HaiPageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Output() backClickEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  clickBack(){
    this.backClickEvent.emit();
  }

}
