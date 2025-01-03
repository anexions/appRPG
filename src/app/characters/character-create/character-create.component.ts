import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss'],
  standalone: false
})
export class CharacterCreateComponent implements OnInit {
  characterForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      class: ['', Validators.required],
      race: ['', Validators.required],
      level: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      // Enviar data al servicio
      console.log(this.characterForm.value);
    }
  }
}
