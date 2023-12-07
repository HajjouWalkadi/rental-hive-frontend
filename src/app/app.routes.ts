import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ReservationComponent} from "./components/reservation/reservation.component";

export const routes: Routes = [
  { path: 'reservation', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
