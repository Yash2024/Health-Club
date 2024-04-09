// import { Injectable } from '@angular/core';
// import { Headers, Http, RequestOptions, Response } from "@angular/http";
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// const httpOptions = {
//   headers: new Headers({ "Content-Type": "application/json" })
// };

// @Injectable({ providedIn: 'root' })
// export class UserService {

//     public static BaseUrl = "http://localhost:6565/";

//     constructor(private http: HttpClient) { }
//     postfitnessdata(data: { firstname: string | undefined; lastname: string | undefined; Age: number; phonenumber: number; email: string; streetaddress: string; city: string; state: string; country: string; pincode: number; trainerpreference: string; physiotherapist: string; package: string; inr: number; paise: number; id: number; }){
//       return this.http.post(UserService.BaseUrl+'appointment',data,httpOptions).pipe(map((response: Response) => response.json()));
//     }
//     getfitnessdata() {
//       return this.http.get(UserService.BaseUrl+'appointment',httpOptions).pipe(map((response: Response) => response.json()));
//     }

//     // add more methods as per requirements
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { appointment } from '../appointment.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: HttpClient) { }

    postfitnessdata(data: appointment) {
        const httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" })
        };
        return this.http.post(UserService.BaseUrl + 'appointment', data, httpOptions).pipe(map((response: any) => response));
    }

    getfitnessdata() {
        return this.http.get(UserService.BaseUrl + 'appointment').pipe(map((response: any) => response));
    }

    // add more methods as per requirements
}
