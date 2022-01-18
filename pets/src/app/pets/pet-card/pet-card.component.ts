import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../pets.model';

@Component({
  selector: 'pets-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input () pet: Pet;

  constructor() {

   }

  ngOnInit(): void {
  }

}
