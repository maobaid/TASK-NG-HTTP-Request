import { Component, effect, inject, Input, signal } from '@angular/core';
import { Pet } from '../../../data/pets';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { PetsService } from '../../shared/services/pets.service';

@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [PetCardComponent],
  templateUrl: './pets-list.component.html',
  styleUrl: './pets-list.component.css',
})
export class PetsListComponent {
  @Input() pets: Pet[] = [];
}
