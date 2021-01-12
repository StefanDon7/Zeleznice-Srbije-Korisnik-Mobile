import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MojNalogService } from './moj-nalog.service';

@Component({
  selector: 'app-moj-nalog',
  templateUrl: './moj-nalog.page.html',
  styleUrls: ['./moj-nalog.page.scss'],
})
export class MojNalogPage implements OnInit {

  constructor(private mojnalogservice:MojNalogService,private router:Router) { }
  sessionItem:any;
  klijent:any;

  ngOnInit() {
    this.vratiKlijenta();
  }

  izlogujSe(){
    sessionStorage.removeItem("klijent");
    this.router.navigate(['/home']);
  }

  vratiKlijenta(){
    this.sessionItem=sessionStorage.getItem("klijent")
    if(this.sessionItem==null){
      this.router.navigate(['/register'])
      alert("registrujte se!")
    }else{
    this.mojnalogservice.vratiKlijenta(this.sessionItem).subscribe(data=>{
      this.klijent=data;
      console.log(this.klijent);
    })
  }
  }

  
}
