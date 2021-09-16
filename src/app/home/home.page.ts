import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { AppComponent } from "../app.component";
import { Klijent } from "../models/klijent.model";
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
    private alertController: AlertController,
    private appComponents:AppComponent
  ) {
    
  }
  klijent: Klijent;

  signIn(form: NgForm) {
    if(!this.proveriPolja(form)){
      this.vratiPoruku("Пажња","","Сва поља морају бити попуњена!")
    }else{ 
    this.homeService
      .signin(form.value.email, form.value.password)
      .subscribe((data) => {
        if(data!=null){
          this.klijent = new Klijent(data.klijentID,data.korisnickoIme,data.ime,data.prezime,data.email,null);
        }
        this.prijaviKlijenta();
        form.resetForm();
      });
    }
  }
  prijaviKlijenta() {
    if (this.klijent != null) {
      sessionStorage.setItem("klijent", this.klijent.klijentID+"");
      sessionStorage.setItem("klijentIme", this.klijent.ime+"");
      sessionStorage.setItem("klijentPrezime", this.klijent.prezime+"");
      sessionStorage.setItem("klijentEmail", this.klijent.email+"");
      sessionStorage.setItem("klijentKorisnickoIme", this.klijent.korisnickoIme+"");
      this.vratiPoruku(
        "Успешно пријављивање",
        "Добродошли",
        "Корисник: " + this.klijent.ime + " " + this.klijent.prezime
      );
      this.router.navigate(["/main"]);
      this.appComponents.ishidden=false;
    } else {
      this.vratiPoruku(
        "Пажња",
        "Погрешни параметри",
        "Проверите да ли добро унели емаил и лозинку!"
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
    } else if (form.value.password == "" || form.value.password == null)
      return false;
    else {
      return true;
    }
  }
}
