import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: "landing-page", component: LandingPageComponent },
  { path: "place-fitness-trainer-appointment", component: PlaceFitnessTrainerAppointmentComponent },
  { path: "view-appointment",component: ViewAppointmentComponent },
  { path: "contact-us",component: ContactUsComponent },
  { path: "**", redirectTo: "landing-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
