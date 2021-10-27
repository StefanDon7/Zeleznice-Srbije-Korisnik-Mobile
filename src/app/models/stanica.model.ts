import{Mesto} from  './mesto.model';


export class Stanica{
    constructor(
        public stanicaID: number,
        public naziv: string,
        public mesto: Mesto
      
    ){}
}