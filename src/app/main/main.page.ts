import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { Klijent } from '../models/klijent.model';
import { Stanica } from '../models/stanica.model';
import { MainService } from './main.service';
import { DatePipe } from '@angular/common'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  [x: string]: any;

  constructor(private mainService:MainService,private router: Router,public datepipe: DatePipe) { 
    this.today=new Date().toISOString();
    console.log(this.today);
  }
  stanice1:any=[];
  stanice2:any=[];
  polasci:any=[];
  klijent:any;
  today:any;
  selectedDate:any;
  selectedDateConverted:any;
  

  ngOnInit() {
    this.vratiStanice();
    this.vratiStanice2();
    this.vratiPolaskeZaDanasnjiDan();
  }

  pretrazi(stanicaPocetna:Stanica,stanicaKrajnja:Stanica){
    this.mainService.vratiPolaske(stanicaPocetna.nazivStanice,stanicaKrajnja.nazivStanice,this.selectedDateConverted).subscribe(polasci=>{
      console.log(stanicaPocetna.nazivStanice);
      console.log(stanicaKrajnja.nazivStanice);
      this.polasci=polasci;
    });
  }
  vratiStanice(){
   this.mainService.vratiStanice().subscribe(stanice=>{
      this.stanice1=stanice;
    })
  }
  vratiStanice2(){
    this.mainService.vratiStanice2().subscribe(stanice=>{
       this.stanice2=stanice;
     })
   }
  vratiPolaskeZaDanasnjiDan(){
    this.mainService.vratiPolaskeZaDanasnjiDan().subscribe(polasci=>{
      this.polasci=polasci;
      console.log(polasci)
    })
  }
  izlogujSe(){
    sessionStorage.removeItem("klijent");
    this.router.navigate(['/home']);
  }

  convert(){
   let selectedDateConverted =this.datepipe.transform(this.selectedDate, 'yyyy-MM-dd');
   this.selectedDateConverted=selectedDateConverted;
    console.log(selectedDateConverted);
  }
 
  rezervisiKartu(id:string){
    this.klijent=sessionStorage.getItem("klijent");
    if(this.klijent!=null){
      this.mainService.rezervisiKartu(this.klijent,id).subscribe(data=>{
        console.log(data);
      })
    }else{
      console.log("Niste prijavljeni!")
    }
  }
  vratiMedjustaniceZaPolazak(id:string){
    this.mainService.vratiMedjustaniceZaPolazak(id).subscribe(data=>{
      console.log(data);
    })
  }
  

}
