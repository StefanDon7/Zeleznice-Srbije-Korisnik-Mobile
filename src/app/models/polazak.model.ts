import { Linija } from './linija.model';
import{Voz} from  './voz.model';

export class Polazak{
    constructor(
        public polazakID: number,
        public naziv: string,
        public datumPolaska:Date,
        public datumDolaska:Date,
        public linija:Linija,
        public Voz:Voz,
        public napomena:string
    ){}
}