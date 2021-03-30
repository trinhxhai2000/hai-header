import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = "Parent title"
  mySubtitle = "Parent subtitle"
  isDisable = false
  doDisable(){
    this.isDisable = ! this.isDisable;
    console.log(this.isDisable)
  }
  //
  exIsCheck : boolean = false
  parentClickEvent(){
    alert("this is parent click event")
  }
}

