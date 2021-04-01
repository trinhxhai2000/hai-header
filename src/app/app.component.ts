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

  // checkbox
  exIsCheck : boolean = false
  parentClickEvent(){
    alert("this is parent click event")
  }

  // cbb
  curTinh
  disableCbb = false
  doDisable(){
    console.log(this.disableCbb)
    this.disableCbb = !this.disableCbb;
  }
  onTouchParent(): void{
    console.log("this is parent touhchinng method")
  }


}

