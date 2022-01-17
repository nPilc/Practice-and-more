import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../../../wine/model/wine/wine.model';

@Component({
  selector: 'wc-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {
  @Input () wines: Wine[];

  constructor() { }

  ngOnInit(): void {
  }

}
