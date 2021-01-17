import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { MojeRezervacijeService } from "./moje-rezervacije.service";

@Component({
  selector: "app-moje-rezervacije",
  templateUrl: "./moje-rezervacije.page.html",
  styleUrls: ["./moje-rezervacije.page.scss"],
})
export class MojeRezervacijePage implements OnInit {
  constructor(
    private mojerezervacijeservice: MojeRezervacijeService,
    private router: Router,
    public _cookieService: CookieService,
    private alertController: AlertController
  ) {}

  rezervacije: any = [];
  sessionItem: any;
  ngOnInit() {
    this.vratiRezervacijeZaKlijenta();
  }

  vratiRezervacijeZaKlijenta() {
    this.sessionItem = sessionStorage.getItem("klijent");
    if (this.sessionItem == null) {
      this.vratiPoruku("Пажња","","Морате се регистровати!");
      this.router.navigate(["/register"]);
    } else {
      this.mojerezervacijeservice
        .vratiSveRezervacije(this.sessionItem)
        .subscribe((data) => {
          this.rezervacije = data;
        });
    }
  }
  izlogujSe() {
    sessionStorage.removeItem("klijent");
    this.router.navigate(["/home"]);
  }
  otkazirezervaciju(polazakid:string) {

  }

  /*
VRACA ALERT PORUKU!
*/
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
