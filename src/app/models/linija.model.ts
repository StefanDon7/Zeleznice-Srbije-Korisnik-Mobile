import{TipLinije} from  './tiplinije.model';
import{Stanica} from  './stanica.model';

export class Linija{
    constructor(
        public linijaID: number,
        public nazivLinije: string,
        public minutaza: number,
        public kilometraza:number,
        public stanicaPocetna: Stanica,
        public stanicaKrajnja: Stanica,
        public tipLinije:TipLinije
    ){}
}