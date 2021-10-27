import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Klijent } from '../models/klijent.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  signin(email:string,lozinka:string){
    return this.http.post<Klijent>('http://localhost:8089/api/klijent/get',{ "email": email,"lozinka": lozinka})
  }
 
}
