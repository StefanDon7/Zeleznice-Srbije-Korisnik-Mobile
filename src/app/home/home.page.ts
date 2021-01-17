import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private _cookieService: CookieService,
    private alertController: AlertController
  ) {
    
  }
  klijent: any;

  signIn(form: NgForm) {
    if(!this.proveriPolja(form)){
      this.vratiPoruku("Paznja","","Sva polja moraju biti popunjena!")
    }else{ 
    this.homeService
      .signin(form.value.email, form.value.password)
      .subscribe((data) => {
        this.klijent = data;
        this.prijaviKlijenta();
        form.resetForm();
      });
    }
  }
  prijaviKlijenta() {
    if (this.klijent != null) {
      sessionStorage.setItem("klijent", this.klijent.id);
      this.vratiPoruku(
        "Uspesno prijavljivanje",
        "Dobro dosli",
        "Korisnik: " + this.klijent.ime + " " + this.klijent.prezime
      );
      this.router.navigate(["/main"]);
    } else {
      this.vratiPoruku(
        "Paznja",
        "Pogresni parameteri",
        "Proverite da li ste dobro uneili vase podatke!"
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
  proveriPolja(form: NgForm) {
    if (form.value.email == "" || form.value.email == null) {
      return false;
    } else if (form.value.password == "" || form.value.password == null)
      return false;
    else {
      return true;
    }
  }
}
