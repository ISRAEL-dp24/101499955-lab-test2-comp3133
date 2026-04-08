import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class CharacterlistComponent implements OnInit {
  characters = signal<Character[]>([]);

  constructor(private hpService: HpService, private router: Router) {}

  ngOnInit() {
    this.hpService.getAllCharacters().subscribe(data => {
      this.characters.set(data);
    });
  }

  goToDetails(id: string) {
    this.router.navigate(['/character', id]);
  }
}