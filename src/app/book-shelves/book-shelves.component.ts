import { Component, OnInit } from '@angular/core';
import data from '../../books.json';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-book-shelves',
  templateUrl: './book-shelves.component.html',
  styleUrls: ['./book-shelves.component.scss']
})
export class BookShelvesComponent implements OnInit {
  routesObject:{};
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }

  ngOnInit() {
    this.routesObject = data;
  }

  changeCategory(...param){
    if(param[2] !== param[0]){
    data[param[2]][param[1]] = data[param[0]][param[1]];
     delete data[param[0]][param[1]];
    }
  }

}


@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}