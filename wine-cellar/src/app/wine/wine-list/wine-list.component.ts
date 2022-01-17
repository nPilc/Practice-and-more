import { Component, OnInit } from '@angular/core';
import { WINES } from '../model/wine/wines';
import { Wine } from '../model/wine/wine.model';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {
  wines: Wine[];

  constructor() {
    this.wines = WINES;
   }

  ngOnInit(): void {
  }

}
