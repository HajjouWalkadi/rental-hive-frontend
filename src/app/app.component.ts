import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EquipmentComponent } from './components/equipment/equipment.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EquipmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-hive-angular';
  response = "empty";

  constructor (private http : HttpClient, private modalService: NgbModal){}

  ngOnInit():void {
    // this.http.get<any>('http://localhost:8081/api/equipment').subscribe(
    //   data => {
    //     this.response = data.content;
    //   }
    // )
  }


}
