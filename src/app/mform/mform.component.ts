import { Component, Input, OnInit } from '@angular/core';
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
  defaultTinh: Tinh =  { id: null, name: '', TTTTU: false };
  defaultHuyen: Huyen =  { id: null, tinhId: -1, name: '' };

  _tinhs: Tinh[]
  _huyens: Huyen[]

  @Input() set tinhs(value :Tinh[]){
    // order is important
    this.curTinhs = value
    this._tinhs = value
    this.deuCurTinh = this.defaultTinh
  }
  get tinhs(){
    return this._tinhs;
  }
  @Input() set huyens(value :Huyen[]){
    this._huyens = value
  }
  get huyens(){
    return this._huyens;
  }

  curTinhs: Tinh[] = [];
  curHuyens: Huyen[] = [];
  // set curHuyens(value: Huyen[]){
  //   this._curHuyens = value.filter(h =>  h.tinhId == this.deuCurTinh.id)
  // }



  tmpTinh: Tinh = this.defaultTinh;
  tmpHuyen: Huyen = this.defaultHuyen;


  // Adding Tinh
  addingTinh: Tinh = this.tmpTinh

  addTinh(tinh: Tinh): void {
    tinh.name = tinh.name.trim();
    if (!tinh) { return; }
    this.tinhService.addTinh( {name: tinh.name, TTTTU: tinh.TTTTU}  as Tinh)
      .subscribe(
        tinhs => {
          this.tinhs.push(tinhs);
          this.curTinhs = this.tinhs
        }
      ); // do something after add
  }
  // Adding Huyen
  addingTinhHuyen: Tinh = this.tmpTinh
  addingHuyen: Huyen = this.tmpHuyen

  addHuyen(huyen: Huyen,tinh : Tinh): void {
    huyen.name = huyen.name.trim()
    if (!huyen) { return; }
    this.tinhService.addHuyen( {name: huyen.name, tinhId: tinh.id}  as Huyen)
      .subscribe(
        huyens => {
          this.huyens.push(huyens);
          this.curHuyens = this.huyens
        }
      ); // do something after add
  }

  // Delete, Edit, Update => deu
  _deuCurTinh:Tinh = this.defaultTinh
  set deuCurTinh(value:Tinh){
    this._deuCurTinh = value;
    // console.log("huyens len",this.huyens.length)
    if (this.huyens!=undefined){
      this.curHuyens = this.huyens.filter(huyen=>huyen.tinhId == value.id);
      console.log(this.curHuyens.length);
    }
  }
  get deuCurTinh(){
    return this._deuCurTinh
  }
  deuCurHuyen:Huyen = this.defaultHuyen

  deleteTinh(tinh: Tinh): void {

    this.tinhs = this.tinhs.filter(t => t.id !== tinh.id);
    this.deuCurTinh = (this.tinhs.length > 0 ? this.tinhs[0] : this.defaultTinh);
    this.curTinhs = this.tinhs;
    this.tinhService.deleteTinh(tinh.id).subscribe(
    );
    console.log("delete tinh");
    // do not implement delete corespond huyen

  }

  deleteHuyen(huyen: Huyen): void {

    // this.huyens = this.huyens.filter(h => h.id !== huyen.id);
    // this.deuCurHuyen= (this.huyens.length > 0 ? this.huyens[0] : this.defaultHuyen);
    // this.curHuyens = this.huyens;
    // this.tinhService.deleteHuyen(huyen.id).subscribe(
    // );
    // console.log("delete huyen");

  }



  disableWhenNotUpdate = true
  onSubmit(){
  }

  doShit(){
    console.log("LOLLLLL");
    this.deuCurTinh = this.defaultTinh
  }


}
