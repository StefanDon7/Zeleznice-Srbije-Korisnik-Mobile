import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stanica } from '../models/stanica.model';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private mainService:MainService) { }
  stanice1:any=[];
  stanice2:any=[];
  polasci:any=[];
  

  

  ngOnInit() {
    this.vratiStanice();
    this.vratiStanice2();
    this.vratiPolaskeZaDanasnjiDan();
  }
  pretrazi(stanicaPocetna:Stanica,stanicaKrajnja:Stanica){
    this.mainService.vratiPolaske(stanicaPocetna.nazivStanice,stanicaKrajnja.nazivStanice,"2020-10-04").subscribe(polasci=>{
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
    })
  }

}
