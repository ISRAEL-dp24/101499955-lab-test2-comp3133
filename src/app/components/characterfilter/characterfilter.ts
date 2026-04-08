import { Component } from '@angular/core';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class CharacterfilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters: Character[] = [];

  constructor(private hpService: HpService) {}

  onHouseChange(event: Event) {
    const house = (event.target as HTMLSelectElement).value;
    if (house) {
      this.hpService.getCharactersByHouse(house).subscribe(data => {
        this.characters = data;
      });
    } else {
      this.characters = [];
    }
  }
}