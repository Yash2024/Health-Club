import { Component } from '@angular/core';
import { UserService } from '../_services';
import { appointment } from '../appointment.model';

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html',
  styleUrl: './place-fitness-trainer-appointment.component.css'
})
export class PlaceFitnessTrainerAppointmentComponent {
  Name!: string ;
  // Other properties for Age, Email, MOB NO, Address, City, State, Country, PinCode
  Age!: number ;
  Email!: string;
  MobNO!: number;
  Address_Line1!: string;
  Address_Line2!: string;
  City!: string;
  State!: string;
  Country!: string;
  PinCode!: number;
  
  trainerPreference!: string;
  physiotherapistNeeded!: string;
  selectedPackage!: string;
  weeks!: number;
  amount: number = 0;
  package!: string ;

  appoint!: appointment;
  constructor(private appservice: UserService) { }

  calculateAmount(): void {
    // console.log(this.physiotherapistNeeded);
    if (this.selectedPackage === 'OneTime') {
      this.amount = 500;
      this.package = "500";
    } else if (this.selectedPackage === 'FourSessions') {
      this.amount = this.weeks * 4 * 400;
      this.package = "400";
    } else if (this.selectedPackage === 'FiveSessions') {
      this.amount = this.weeks * 5 * 300;
      this.package = "300";
    }


    if(this.physiotherapistNeeded === "Yes"){
      this.amount+=500;
    }
  }

  submit(): void{

    // if(!this.Name 
    // )
    // {
      
    //   alert("please enter all the details");
    // }

    // const data = {
      this.appoint.firstname = this.Name,
      this.appoint.lastname= this.Name,
      this.appoint.age= this.Age,
      this.appoint.phonenumber= this.MobNO,
      this.appoint.email= this.Email,
      this.appoint.streetaddress= this.Address_Line1+" "+this.Address_Line2,
      this.appoint.city= this.City,
      this.appoint.state= this.State,
      this.appoint.country= this.Country,
      this.appoint.pincode= this.PinCode,
      this.appoint.trainerpreference= this.trainerPreference,
      this.appoint.physiotherapist= this.physiotherapistNeeded,
      this.appoint.package= this.package,
      this.appoint.inr= this.amount,
      this.appoint.paise= 0,
      this.appoint.id= Math.floor(Math.random() * 1000) 
    // }
    console.log(this.appoint);

    // this.appservice.postfitnessdata(this.appoint).subscribe((res : any)=>{
    //   console.log(res);
    // })
  }
}
