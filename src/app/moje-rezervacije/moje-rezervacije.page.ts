import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MojeRezervacijeService } from './moje-rezervacije.service';

@Component({
  selector: 'app-moje-rezervacije',
  templateUrl: './moje-rezervacije.page.html',
  styleUrls: ['./moje-rezervacije.page.scss'],
})
export class MojeRezervacijePage implements OnInit {

  constructor(private mojerezervacijeservice:MojeRezervacijeService,private router: Router,public _cookieService:CookieService) { }

  rezervacije:any=[];
  sessionItem:any;
  ngOnInit() {
    this.vratiRezervacijeZaKlijenta();
  }

  vratiRezervacijeZaKlijenta(){
    this.sessionItem=sessionStorage.getItem("klijent")
    if(this.sessionItem==null){
      this.router.navigate(['/register'])
      alert("registrujte se!")
    }else{
    this.mojerezervacijeservice.vratiSveRezervacije(this.sessionItem).subscribe(data=>{
      this.rezervacije=data;
      console.log(this.rezervacije);
    })
  }
  }
  izlogujSe(){
    sessionStorage.removeItem("klijent");
    this.router.navigate(['/home']);
  }

}
