import{Mesto} from  './mesto.model';


export class Stanica{
    constructor(
        public stanicaID: number,
        public nazivStanice: string,
        public mesto: Mesto
      
    ){}
}