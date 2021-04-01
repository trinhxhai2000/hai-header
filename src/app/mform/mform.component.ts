import { Component, OnInit } from '@angular/core';
import { Tinh } from '../tinh';
import { Huyen } from '../huyen';
import { TinhService } from '../tinh.service';

@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.css']
})
export class MformComponent implements OnInit {

  constructor(
    private tinhService : TinhService
  ) { }

  ngOnInit(): void {
    this.tinhService.getTinhs().subscribe(
      tinhs => this.curTinhs = tinhs
    )
  }

  defaultTinh: Tinh =  { id: 1, name: '', TTTTU: false };
  defaultHuyen: Huyen =  { id: -1, tinhId: -1, name: '' };

  tmpTinh: Tinh = this.defaultTinh;
  tmpHuyen: Huyen = this.defaultHuyen;

  curTinhs: Tinh[] = []

  // Adding
  addingTinh: Tinh = this.tmpTinh

  addTinh(tinh: Tinh): void {
    tinh.name = tinh.name.trim();
    if (!tinh) { return; }
    this.tinhService.addTinh( {name: tinh.name, TTTTU: tinh.TTTTU}  as Tinh)
      .subscribe(); // do something after add
  }


  // Delete, Edit, Update => deu
  deuCurTinh:Tinh = this.defaultTinh
  deuCurHuyen:Huyen = this.defaultHuyen

  disableWhenNotUpdate = true


  onSubmit(){
  }


}
