import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pet } from '../../../data/pets';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PetsService extends BaseService {
  private apiUrl = 'https://pets-react-query-backend.eapi.joincoded.com/pets';

  getPets(): Observable<Pet[]> {
    return this.get<Pet[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching pets:', error);
        return of([]);
      })
    );
  }

  getPet(id: number): Observable<Pet> {
    return this.get<Pet>(this.apiUrl + '/' + id).pipe(
      catchError((error) => {
        console.error('Error fetching pet:', error);
        return of();
      })
    );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.post(this.apiUrl, pet).pipe(
      catchError((error) => {
        console.error('Error adding pet:', error);
        return of();
      })
    );
  }
}
