import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Klijent } from "../models/klijent.model";
import { RegisterService } from "./register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(
    private registerService: RegisterService,
    private alertController: AlertController,
    private router: Router
  ) {}
  klijent: any;
  email: any;
  ngOnInit() {}

  register(form: NgForm) {
    this.proveriKorisnika(form.value.email);
    if (this.email != null) {
      this.vratiPoruku(
        "Paznja",
        "",
        "Nalog sa email adresom: " + form.value.email + " vec postoji u sistemu!"
      );
      form.resetForm();
    } else {
      this.registerService
        .register(
          form.value.email,
          form.value.username,
          form.value.firstname,
          form.value.lastname,
          form.value.password
        )
        .subscribe((data) => {
          this.klijent = data;
          this.registracijaKlijenta();
        });
    }
    form.resetForm();
    this.router.navigate(['/home'])

  }
  proveriKorisnika(email: string) {
    this.registerService.vratiKorisnika(email).subscribe((data) => {
     
      this.email = data;
     
    });
  }
  registracijaKlijenta() {
    if (this.klijent != null) {
      this.vratiPoruku(
        "Uspesna registracija",
        "",
        "Korisnik: " + this.klijent.ime + " " + this.klijent.prezime
      );
    } else {
      this.vratiPoruku(
        "Neuspesno registracija",
        "",
        "Sistem ne moze da registruje korisnika!"
      );
    }
  }
  async vratiPoruku(header: string, subHeader: string, poruka: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: poruka,
      buttons: ["Ok"],
    });
    await alert.present();
  }
}
