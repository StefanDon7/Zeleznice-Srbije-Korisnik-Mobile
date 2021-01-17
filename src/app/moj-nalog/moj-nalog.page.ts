import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Klijent } from "../models/klijent.model";
import { MojNalogService } from "./moj-nalog.service";

@Component({
  selector: "app-moj-nalog",
  templateUrl: "./moj-nalog.page.html",
  styleUrls: ["./moj-nalog.page.scss"],
})
export class MojNalogPage implements OnInit {
  constructor(
    private mojnalogservice: MojNalogService,
    private router: Router,
    private alertController:AlertController
  ) {}
  sessionItem: any;
  public klijent: any;

  ngOnInit() {
    this.vratiKlijenta();
  }

  izlogujSe() {
    sessionStorage.removeItem("klijent");
    this.router.navigate(["/home"]);
  }

  vratiKlijenta() {
    this.sessionItem = sessionStorage.getItem("klijent");
    if (this.sessionItem == null) {
      this.vratiPoruku("Пажња","","Морате се регистровати!");
      this.router.navigate(["/register"]);
    } else {
      this.mojnalogservice.vratiKlijenta(this.sessionItem).subscribe((data) => {
        this.klijent = data;
        console.log(this.klijent);
      });
    }
  }
  izmeniNalog(form:NgForm){
    
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
