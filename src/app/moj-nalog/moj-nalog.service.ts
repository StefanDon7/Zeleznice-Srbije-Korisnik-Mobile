import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Klijent } from '../models/klijent.model';

@Injectable({
  providedIn: 'root'
})
export class MojNalogService {

  constructor(private http:HttpClient) { }

  vratiKlijenta(id:string){
    return this.http.post<Klijent>('http://localhost:8089/api/klijent/getbyid',{ "klijentID": id})
  }
  izmeniSifru(id:string,sifra:string){
    return this.http.put('http://localhost:8089/api/klijent/updatepassword',{ "klijentID": id,"lozinka": sifra})
  }
  izmeniKorisnickoIme(id:string,korisnickoIme:string){
    return this.http.put('http://localhost:8089/api/klijent/updateusername',{ "klijentID": id,"korisnickoIme": korisnickoIme})
  }

}
