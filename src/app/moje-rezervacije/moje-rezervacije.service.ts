import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Rezervacija } from "../models/rezervacija.model";

@Injectable({
  providedIn: "root",
})
export class MojeRezervacijeService {
  constructor(private http: HttpClient) {}

  vratiSveRezervacije(klijentID: string): Observable<Rezervacija[]> {
    return this.http.post<Rezervacija[]>(
      "http://localhost:8089/api/rezervacija/klijent/all",
      { klijentID: klijentID }
    );
  }
  otkaziRezervaciju(klijentID: string, polazakID: string) {
    return this.http.post("http://localhost:8089/api/rezervacija/delete", {
      klijentID: klijentID,
      polazakID: polazakID,
    });
  }
}
