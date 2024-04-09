import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { appointment } from '../appointment.model';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.css'
})
export class ViewAppointmentComponent implements OnInit{
  appointments!: appointment[]; 

  constructor(private appservice: UserService) {}
  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    // Call your appointment service to fetch appointment data
    // this.appointmentService.getAppointments().subscribe((data: any[]) => {
    //   this.appointments = data;
    // });

    this.appservice.getfitnessdata().subscribe((data: appointment[]) => {
      this.appointments = data
    });
  }
}
