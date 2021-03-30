import { Component } from '@angular/core';
import {HaiPageHeaderComponent} from './hai-page-header/hai-page-header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = "Parent title"
  mySubtitle = "Parent subtitle"
  parentClickEvent(){
    alert("this is parent click event")
  }
}

