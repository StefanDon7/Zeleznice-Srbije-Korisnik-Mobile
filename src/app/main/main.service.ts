import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { take, filter, map, tap, switchMap } from "rxjs/operators";
import { Medjustanica } from "../models/medjustanica.model";
import { Polazak } from "../models/polazak.model";
import { Stanica } from "../models/stanica.model";
import { Rezervacija } from "../models/rezervacija.model";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(private http: HttpClient) {}

  vratiStanice(): Observable<Stanica[]> {
    return this.http.get<Stanica[]>("http://localhost:8089/api/stanica/all");
  }
  vratiStanice2(): Observable<Stanica[]> {
    return this.http.get<Stanica[]>("http://localhost:8089/api/stanica/all");
  }

  vratiPolaskeZaDanasnjiDan(danas: string): Observable<Polazak[]> {
    return this.http.get<Polazak[]>(
      "http://localhost:8089/api/polazak/" + danas
    );
  }

  vratiPolaske(
    stanicaPocetna: string,
    stanicaKrajnja: string,
    datum: string
  ): Observable<Polazak[]> {
    return this.http.get<Polazak[]>(
      "http://localhost:8089/api/polazak/" +
        stanicaPocetna +
        "/" +
        stanicaKrajnja +
        "/" +
        datum
    );
  }
  vratiMedjustaniceZaPolazak(linijaID: string): Observable<Medjustanica[]> {
    return this.http.get<Medjustanica[]>(
      "http://localhost:8089/api/medjustanica/" + linijaID
    );
  }

  rezervisiKartu(klijentID: number, polazakID: string) {
    return this.http.post("http://localhost:8089/api/rezervacija/add/", {
      "rezervacijaID": 0,
      "klijent": {
        "klijentID": klijentID,
      },
      "polazak": {
        "polazakID": polazakID,
      },
    });
  }

  proveriRezervaciju(
    klijentID: string,
    polazakID: string
  ): Observable<Rezervacija> {
    return this.http.post<Rezervacija>(
      "http://localhost:8089/api/rezervacija/get",
      {
        klijent: {
          klijentID: klijentID,
        },
        polazak: {
          polazakID: polazakID,
        },
      }
    );
  }
}
