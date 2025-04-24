import { Component, computed, effect, inject, signal } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
import { PetsService } from '../../shared/services/pets.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, PetsListComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  readonly query = signal('');
  private petsService = inject(PetsService);

  readonly allPets = toSignal(this.petsService.getPets(), { initialValue: [] });

  setQuery(query: string) {
    this.query.set(query);
  }

  readonly filteredPets = computed(() => {
    const q = this.query().toLowerCase();
    return this.allPets().filter((pet) => pet.name.toLowerCase().includes(q));
  });
}
