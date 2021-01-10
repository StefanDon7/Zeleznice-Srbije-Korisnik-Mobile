import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(email:string,korisnickoIme:string,ime:string,prezime:string,lozinka:string){
    return this.http.post('http://localhost:8089/api/klijent/add',{ "email": email,"korisnickoIme": korisnickoIme,"ime": ime,"prezime": prezime,"lozinka": lozinka})
  }
}
