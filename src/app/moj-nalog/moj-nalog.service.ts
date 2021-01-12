import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MojNalogService {

  constructor(private http:HttpClient) { }

  vratiKlijenta(id:string){
    return this.http.post('http://localhost:8089/api/klijent/getbyid',{ "id": id})
  }

}
