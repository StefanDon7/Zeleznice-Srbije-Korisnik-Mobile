import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  
  constructor(private http:HttpClient) {
    
  }


  vratiStanice(){
    return this.http.get('http://localhost:8089/api/stanica/all')
  }
  vratiStanice2(){
    return this.http.get('http://localhost:8089/api/stanica/all')
  }

  vratiPolaskeZaDanasnjiDan(){
    return this.http.get('http://localhost:8089/api/polazak/2020-10-04')
  }

  vratiPolaske(stanicaPocetna:string,stanicaKrajnja:string,datum:string){
    return this.http.get('http://localhost:8089/api/polazak/'+datum+'/'+stanicaPocetna+'/'+stanicaKrajnja)
  }
}
