import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Klijent } from '../models/klijent.model';

@Injectable({
  providedIn: 'root'
})
export class MojNalogService {

  constructor(private http:HttpClient) { }

  vratiKlijenta(id:string){
    return this.http.post<Klijent>('http://localhost:8089/api/klijent/getbyid',{ "id": id})
  }

}
