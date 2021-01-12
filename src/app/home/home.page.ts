import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Klijent } from '../models/klijent.model';
import { HomeService } from './home.service';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private homeService:HomeService,private router: Router,private _cookieService:CookieService) {
    
    }
  klijent:any;
  

  signIn(form:NgForm){
    this.homeService.signin(form.value.email,form.value.password).subscribe(data=>{
      if(data!=null){
        this.klijent=data;
        this._cookieService.put('klijent',this.klijent)
        sessionStorage.setItem("klijent",this.klijent.id)
        alert("Dobrodošao: "+this.klijent.ime)
        form.resetForm();
        this.router.navigate(['/main'])
      }else{
        alert("Sistem ne moze da pronadje korisnika!")
      }
    })
  }
}
