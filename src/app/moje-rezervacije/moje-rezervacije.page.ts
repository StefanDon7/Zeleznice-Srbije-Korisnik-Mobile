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
  ) {
    this.klijent=sessionStorage.getItem("klijent");
    this.rezervacije=this.vratiRezervacijeZaKlijenta();
  }

  rezervacije: any = [];
  klijent: any;
  ngOnInit() {
    this.vratiRezervacijeZaKlijenta();
  }

  vratiRezervacijeZaKlijenta() {
    this.klijent = sessionStorage.getItem("klijent");
    if (this.klijent == null) {
      this.vratiPoruku("Пажња","","Морате се регистровати!");
      this.router.navigate(["/register"]);
    } else {
      this.mojerezervacijeservice
        .vratiSveRezervacije(this.klijent)
        .subscribe((data) => {
          this.rezervacije = data;
        });
    }
  }

  otkazirezervaciju(polazakid:string) {
    console.log(polazakid);
    console.log(this.klijent)
    this.mojerezervacijeservice.otkaziRezervaciju(this.klijent,polazakid).subscribe(data=>{
         this.vratiRezervacijeZaKlijenta();
         this.vratiPoruku("Успешно","отказана резервација","")
    })
    
  }
  

  /*
VRACA ALERT PORUKU!
*/
  async vratiPoruku(header: string, subHeader: string, poruka: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: poruka,
      buttons: ["Ок"],
    });
    await alert.present();
  }
  refresh(): void {
    window.location.reload();
}
}
