import { Component, OnInit } from '@angular/core';
import { Tinh } from '../tinh'
import { Huyen } from '../huyen'
import { TinhService } from '../tinh.service'

@Component({
  selector: 'app-tinh-data-controller',
  templateUrl: './tinh-data-controller.component.html',
  styleUrls: ['./tinh-data-controller.component.css']
})
export class TinhDataControllerComponent implements OnInit {

  constructor(
    private tinhService: TinhService
  ) { }

  ngOnInit(): void {
    this.getTinhs()
    this.getHuyens()
  }

  curTinhs: Tinh[] = []
  curHuyens: Huyen[] = []

  getTinhs(){
    this.tinhService.getTinhs()
      .subscribe( tinhs => {
        console.log("tinh-data-controller : fetch tinh from service success");
        this.curTinhs = tinhs
      })
  }
  getHuyens(){
    this.tinhService.getHuyens()
      .subscribe( huyens => {
        console.log("tinh-data-controller : fetch huyens from service success");
        this.curHuyens = huyens
      })
  }

}
