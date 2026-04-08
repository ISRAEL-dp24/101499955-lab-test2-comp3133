import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character.model';




@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class CharacterdetailsComponent implements OnInit {
  character = signal<Character | null>(null);

  constructor(
    private route: ActivatedRoute,
    private hpService: HpService,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe(data => {
        this.character.set(data[0]);
      });
    }
  }
  goBack() {
    this.router.navigate(['/']);}
}