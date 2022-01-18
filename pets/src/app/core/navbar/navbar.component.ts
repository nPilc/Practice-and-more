import { Component, Input, OnInit } from '@angular/core';
import { Pettype } from '../../pets/pettypes.model';


@Component({
  selector: 'pets-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() petstype: Pettype[];

  constructor() {

  }

  ngOnInit(): void {
  }

}
