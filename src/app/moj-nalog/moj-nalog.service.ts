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
  izmeniSifru(id:string,sifra:string){
    return this.http.post('http://localhost:8089/api/klijent/updatepassword',{ "id": id,"lozinka": sifra})
  }
  izmeniKorisnickoIme(id:string,korisnickoIme:string){
    return this.http.post('http://localhost:8089/api/klijent/updateusername',{ "id": id,"korisnickoIme": korisnickoIme})
  }

}
