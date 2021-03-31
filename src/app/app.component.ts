import { Component } from '@angular/core';
import { Huyen } from './huyen';
import { TinhService } from './tinh.service';
import { Observable, of } from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myTitle = "Parent title"
  mySubtitle = "Parent subtitle"

  //
  exIsCheck : boolean = false
  parentClickEvent(){
    alert("this is parent click event")
  }


}

