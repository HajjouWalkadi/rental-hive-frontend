import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
//import { ReservationComponent } from './reservation/reservation.component';
import {HttpClientModule} from "@angular/common/http";
import { ReservationComponent } from './components/reservation/reservation.component';






@NgModule({
  imports: [
    CommonModule,FormsModule,   BrowserModule,
    RouterModule,ReactiveFormsModule, HttpClientModule,
  ], providers: [],
  declarations: [
    AppComponent,ReservationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
