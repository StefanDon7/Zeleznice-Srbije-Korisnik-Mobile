import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MojeRezervacijeService {

  constructor(private http:HttpClient) { }

  vratiSveRezervacije(id:string){
    return this.http.post('http://localhost:8089/api/rezervacija/klijent/rezervacije',{ "id": id})
  }
  
}
