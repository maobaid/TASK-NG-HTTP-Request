import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { PetsService } from '../../shared/services/pets.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css',
})
export class PetDetailsComponent {
  private petsService = inject(PetsService);
  private route = inject(ActivatedRoute);

  readonly id = computed(() => Number(this.route.snapshot.paramMap.get('id')));

  readonly pet = toSignal(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.petsService.getPet(id))
    ),
    { initialValue: undefined }
  );
}
