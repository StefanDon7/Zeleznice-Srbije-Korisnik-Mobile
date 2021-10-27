import { Klijent } from "./klijent.model";
import { Polazak } from "./polazak.model";

export class Rezervacija {
  constructor(
    public rezervacijaID: number,
    public klijent: Klijent,
    public polazak: Polazak
  ) {}
}
