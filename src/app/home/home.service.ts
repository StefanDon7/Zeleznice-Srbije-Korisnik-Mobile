import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  signin(email:string,password:string){
    return this.http.post('http://localhost:8089/api/klijent/get',{ "email": email,"lozinka": password})
  }
 
}
