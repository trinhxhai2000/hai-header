import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core'
import { Directive,  Renderer2, ViewContainerRef  } from '@angular/core';

@Component({
  selector: 'app-hai-page-header',
  templateUrl: './hai-page-header.component.html',
  styleUrls: ['./hai-page-header.component.css']
})
export class HaiPageHeaderComponent implements OnInit {

  // @ViewChild('templateTwo', {read: TemplateRef}) tpl1: TemplateRef<any>;
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any>;

  _title2 : TemplateRef<any> ;
  textNode: Text;

  @Input() set title(value:  TemplateRef<any> | string){
    this.updateView(value);
  }

  @Input() subtitle: string;
  @Output() backClickEvent = new EventEmitter<string>();

  constructor(private vcRef: ViewContainerRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  clickBack(){
    this.backClickEvent.emit();
  }
  private updateView(value: string | TemplateRef<any>) {
    this.clear();

    if (!value) {
      return;
    }

    if (value instanceof TemplateRef) {
      this.vcRef.createEmbeddedView(value);
    } else {
      this.textNode = this.renderer.createText(value);
      const elem = this.vcRef.element.nativeElement;

      this.renderer.insertBefore(elem.parentNode, this.textNode, elem);
    }
  }

  private clear() {
    this.vcRef.clear();
    if (this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }
}
