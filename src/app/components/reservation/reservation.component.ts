import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../../services/reservation.service";


class ReservationForm {
}

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService
  ) {
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      quantite: [1, [Validators.required]],
      nameEquipment: ['', [Validators.required]],
      dateStartReservation: ['', [Validators.required]],
      dateRetoure: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.reservationForm.invalid) {
      return;
    }
    const reservation: ReservationForm = this.reservationForm.value;
    this.reservationService.saveReservation(reservation).subscribe(
      (data) => {
        console.log('Reservation created successfully', data);
        this.resetForm();
      },
      (error) => {
        console.error('Error adding reservation', error);
      }
    );
  }
  resetForm(): void {
    this.reservationForm.reset({
      quantite: 1,
      nameEquipment: '',
      dateStartReservation: '',
      dateRetoure: '',
    });
  }
}
