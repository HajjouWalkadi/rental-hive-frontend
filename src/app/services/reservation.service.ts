import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  saveReservation(reservation: any) {
    return this.http.post('/api/v1/reservation/save', reservation);
  }
}
