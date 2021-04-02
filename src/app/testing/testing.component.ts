import { Component, OnInit, Input } from '@angular/core';
import { TinhService }  from '../tinh.service';
import { Tinh } from '../tinh';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit{
  constructor(
    private tinhService: TinhService
    ) {
    }
  ngOnInit(): void {
    this.getTinhs()
  }

  curTinhs:Tinh[] = []
  tmpTinh:Tinh;

  getTinhs(){
    this.tinhService.getTinhs()
      .subscribe(tinhs => {
        this.curTinhs = tinhs;
        console.log(this.curTinhs.length)
      })
  }
  defaultTinh: Tinh =  { id: null, name: 'shieetttt', TTTTU: false };
  addTinh(){
    // defaultTinh2: Tinh =  { id: 1, name: '', TTTTU: false };
    this.tinhService.addTinh(this.defaultTinh).subscribe(
      tinh => this.curTinhs.push(tinh)
    )
  }

}
