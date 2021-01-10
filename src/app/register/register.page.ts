import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Klijent } from '../models/klijent.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private registerService:RegisterService) { }
  klijent:any;
  ngOnInit() {
  }

  register(form:NgForm){
    this.registerService.register(form.value.email,form.value.username,form.value.firstname,form.value.lastname,form.value.password).subscribe(data=>{
      if(data!=null){
        this.klijent=data;
        alert("Dobrodošao: "+this.klijent.ime)
        form.resetForm();
      }else{
        alert("Sistem ne moze da pronadje korisnika!")
      }
    })
  }
 

}
