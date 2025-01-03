import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  standalone: false
})
export class CharacterDetailComponent implements OnInit {

  character!: Character;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Tomar el id de la URL (por ejemplo /characters/2)
    const id = this.route.snapshot.paramMap.get('id');
    // Aquí posteriormente llamaremos al servicio para obtener el personaje
    // Por ahora, lo dejaremos en blanco o con mock data
    if (id) {
      // ...
    }
  }
}
