import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { from } from "rxjs";
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
  klijent: Klijent;
  email: any;
  ngOnInit() {}

  register(form: NgForm) {
    this.email=form.value.email;
    if (!this.proveriPolja(form)) {
      this.vratiPoruku("Пажња", "", "Сва поља морају бити попуњена!");
    } else if (!this.lozinkeSeNePoklapaju(form)) {
      this.vratiPoruku("Пажња", "", "Потврда лозинке није успела!");
    } else {
      this.registerService
        .register(
          form.value.email,
          form.value.username,
          form.value.firstname,
          form.value.lastname,
          form.value.password
        )
        .subscribe(
          (data) => {
            this.klijent = new Klijent(
              data.klijentID,
              data.korisnickoIme,
              data.ime,
              data.prezime,
              data.email,
              null
            );
            this.registracijaKlijenta();
            this.router.navigate(["/home"]);
          },
          (error) => {
            console.log("UHVACEN ERROR");
            this.vratiPoruku(
              "Пажња",
              "",
              "Налог са емаил адресом: " +
              this.email +
                " већ постоји у систему!"
            );
          }
        );
      form.resetForm();
    }
  }
  proveriKorisnika(email: string) {
    this.registerService.vratiKorisnika(email).subscribe((data) => {
      this.email = data;
    });
  }
  registracijaKlijenta() {
    if (this.klijent != null) {
      this.vratiPoruku(
        "Успешна регистрација",
        "",
        "Корисник: " + this.klijent.ime + " " + this.klijent.prezime
      );
    } else {
      this.vratiPoruku(
        "Неуспешна регистрација",
        "",
        "Систем не може да региструје корисника!"
      );
    }
  }
  async vratiPoruku(header: string, subHeader: string, poruka: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: poruka,
      buttons: ["Ок"],
    });
    await alert.present();
  }

  proveriPolja(form: NgForm) {
    if (form.value.email == "" || form.value.email == null) {
      return false;
    } else if (form.value.email == "" || form.value.email == null) {
      return false;
    } else if (form.value.username == "" || form.value.username == null) {
      return false;
    } else if (form.value.firstname == "" || form.value.firstname == null) {
      return false;
    } else if (form.value.lastname == "" || form.value.lastname == null) {
      return false;
    } else if (form.value.password == "" || form.value.password == null) {
      return false;
    } else if (form.value.repassword == "" || form.value.repassword == null) {
      return false;
    } else {
      return true;
    }
  }
  lozinkeSeNePoklapaju(form: NgForm) {
    if (form.value.password != form.value.repassword) {
      return false;
    }
    return true;
  }
}
