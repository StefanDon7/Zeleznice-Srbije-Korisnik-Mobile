import { Linija } from "./linija.model";
import { Stanica } from "./stanica.model";

export class Medjustanica{
    constructor(
        public medjustanicaID: number,
        public linija: Linija,
        public stanica:Stanica,
        public redniBroj:number
    ){}
}