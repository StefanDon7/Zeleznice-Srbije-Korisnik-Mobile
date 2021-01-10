import{TipLinije} from  './tiplinije.model';
import{Stanica} from  './stanica.model';

export class Linija{
    constructor(
        public linijaID: number,
        public nazivLinije: string,
        public stanicaPolazna: Stanica,
        public stanicaKrajnja: Stanica,
        public minutaza: number,
        public kilometraza:number,
        public tipLinije:TipLinije
    ){}
}