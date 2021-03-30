import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Huyen } from './huyen';
import { Tinh } from './tinh';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tinh = [
      { id: 1, name: 'Bắc Giang' },
      { id: 2, name: 'Hà Nội' },
      { id: 3, name: 'Khánh Hòa' },
      { id: 4, name: 'Bắc Ninh' },
      { id: 5, name: 'Cần Thơ' },
    ];
    const huyen = [
      { id: 1, tinhId: 1, name: 'Hiệp Hòa' },
      { id: 2, tinhId: 1, name: 'Yên Dũng' },
      { id: 3, tinhId: 1, name: 'Lục Nam' },
      { id: 4, tinhId: 1, name: 'Sơn Động' },
      { id: 5, tinhId: 1, name: 'Lạng Giang' },
      { id: 6, tinhId: 1, name: 'Việt Yên' },
      { id: 7, tinhId: 1, name: 'Tân Yên' },
      { id: 8, tinhId: 1, name: 'Yên Thế' },
      { id: 9, tinhId: 1, name: 'Lục Ngạn' },

      { id: 10, tinhId: 2, name: 'Ba Vì' },
      { id: 11, tinhId: 2, name: 'Chương Mỹ' },
      { id: 12, tinhId: 2, name: 'Phúc Thọ' },
      { id: 13, tinhId: 2, name: 'Đan Phượng' },
      { id: 14, tinhId: 2, name: 'Đông Anh' },
      { id: 15, tinhId: 2, name: 'Gia Lâm' },
      { id: 16, tinhId: 2, name: 'Hoài Đức' },
      { id: 17, tinhId: 2, name: 'Mỹ Đức' },
      { id: 18, tinhId: 2, name: 'Phú Xuyên' },
      { id: 19, tinhId: 2, name: 'Quốc Oai' },
      { id: 20, tinhId: 2, name: 'Sóc Sơn' },

      { id: 21, tinhId: 3, name: 'Nha Trang' },
      { id: 22, tinhId: 3, name: 'Cam Ranh' },
      { id: 23, tinhId: 3, name: 'Diên Khánh' },
      { id: 24, tinhId: 3, name: 'Khánh Vĩnh' },
      { id: 25, tinhId: 3, name: 'Khánh Sơn' },
      { id: 26, tinhId: 3, name: 'Cam Lâm' },

      { id: 27, tinhId: 4, name: 'Gia Lương' },
      { id: 28, tinhId: 4, name: 'Quế Võ' },
      { id: 29, tinhId: 4, name: 'Thuận Thành' },
      { id: 30, tinhId: 4, name: 'Tiên Sơn' },
      { id: 31, tinhId: 4, name: 'Yên Phong' },

      { id: 32, tinhId: 5, name: 'Ninh Kiều' },
      { id: 33, tinhId: 5, name: 'Bình Thuỷ' },
      { id: 34, tinhId: 5, name: 'Cái Răng' },
      { id: 35, tinhId: 5, name: 'Phong Điền' },
      { id: 36, tinhId: 5, name: 'Cờ Đỏ' },
      { id: 37, tinhId: 5, name: 'Vĩnh Thạnh' },
      { id: 38, tinhId: 5, name: ' Thốt Nốt' },

    ];
    return {tinh,huyen};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Tinh | Huyen>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
