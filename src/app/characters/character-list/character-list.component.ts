import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: false,

  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [
    { id: 1, name: 'Aragorn', class: 'Guerrero', race: 'Humano', level: 5 },
    { id: 2, name: 'Legolas', class: 'Arquero', race: 'Elfo', level: 4 },
    { id: 3, name: 'Gandalf', class: 'Mago', race: 'Istari', level: 10 },
  ];

  constructor() {}

  ngOnInit(): void {
    // Aquí en un futuro llamaremos a nuestro servicio
    // para obtener la lista de personajes
  }
}
