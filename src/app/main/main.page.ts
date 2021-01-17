import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HomePage } from "../home/home.page";
import { Klijent } from "../models/klijent.model";
import { Stanica } from "../models/stanica.model";
import { MainService } from "./main.service";
import { DatePipe } from "@angular/common";
import { AlertController } from "@ionic/angular";
import { Identifiers } from "@angular/compiler";

@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  

  constructor(
    private mainService: MainService,
    private router: Router,
    public datepipe: DatePipe,
    private alertController: AlertController
    ) {
  }
  stanice1: any = [];
  stanice2: any = [];
  polasci: any = [];



  today: any;
  selectedDate: any;
  selectedDateConverted: any;

  klijent: any;
  
  rezervacija: any;
  
  
  listaMedjustanica:any=[];

  ngOnInit() {
    this.vratiStanice();
    this.vratiStanice2();
    this.vratiPolaskeZaDanasnjiDan();
  }

  /*
  Vraca sve polaske za pocetnu stanicu,krajnju stanicu i datum!
  */
  pretrazi(stanicaPocetna: Stanica, stanicaKrajnja: Stanica) {
    if(!this.parametriDobri(stanicaPocetna,stanicaKrajnja)){
      this.vratiPoruku("Грешка","","Сва поља морају бити попуњена!")
    }else{
    this.mainService
      .vratiPolaske(
        stanicaPocetna.nazivStanice,
        stanicaKrajnja.nazivStanice,
        this.selectedDateConverted
      )
      .subscribe((polasci) => {
        console.log(stanicaPocetna.nazivStanice);
        console.log(stanicaKrajnja.nazivStanice);
        this.polasci = polasci;
      });
    }
  }

  parametriDobri(stanicaPocetna:Stanica,stanicaKrajnja:Stanica){
    if(stanicaPocetna==null || stanicaKrajnja==null)
      return false;
    else if(this.selectedDateConverted==null){
      return false;
    }
    return true;
  }

  /*
 Vraca stanice i ubacuje ih u prvi kombo box!
  */
  vratiStanice() {
    this.mainService.vratiStanice().subscribe((stanice) => {
      this.stanice1 = stanice;
    });
  }
  /*
 Vraca stanice i ubacuje ih u drugi kombo box!
  */
  vratiStanice2() {
    this.mainService.vratiStanice2().subscribe((stanice) => {
      this.stanice2 = stanice;
    });
  }
  /*
  Prilikom otvaranja strane on nam daje sve polaske koji postoje za taj dan ne vezano za liniju
  */
  vratiPolaskeZaDanasnjiDan() {
    this.convertDanas();
    this.mainService.vratiPolaskeZaDanasnjiDan(this.today).subscribe((polasci) => {
      this.polasci = polasci;
      console.log(polasci);
    });
  }

  /*
  Unistava sessiju za klijenta i odjavljuje se!
  */
  izlogujSe() {
    sessionStorage.removeItem("klijent");
    this.router.navigate(["/home"]);
  }
  /*
  Prilikom selektovanja datuma u uzima datum i konvertuje ga u odgovarajuci format kako bi u bazi mogao da ga nadje!
  */
  convert() {
    let selectedDateConverted = this.datepipe.transform(
      this.selectedDate,
      "yyyy-MM-dd"
    );
    this.selectedDateConverted = selectedDateConverted;
    console.log(selectedDateConverted);
  }
  convertDanas() {
    this.today = new Date().toISOString();
    console.log(this.today);
    let danas = this.datepipe.transform(
      this.today,
      "yyyy-MM-dd"
    );
    this.today = danas;
    console.log(this.today);
  }
  /*
    Rezervisi kartu!
  */
  rezervisiKartuUnosUBazu(polazakid: string) {
      if (this.rezervacija==null) {
        this.mainService
          .rezervisiKartu(this.klijent, polazakid)
          .subscribe((data) => {
          });
        this.vratiPoruku("Полазак","", "Успешно сте резервисали карту за полазак!");
      } else {
        this.vratiPoruku(
          "Пажња",
          "",
          "Већ сте резервисали овај полазак!!"
        );
      }
      this.rezervacija=null;
  }

  /*Prikazuje sve medjustanice za odredjenu liniju tj polazak koji klijent*/
  vratiMedjustaniceZaPolazak(id: string) {
    this.mainService.vratiMedjustaniceZaPolazak(id).subscribe((data) => {
      this.listaMedjustanica = data;
    });
  }
  /*
  Proverava da li je klijent vec rezervisao kartu za polazak!
  */
  rezervisiKartu(polazakID: string) {
    console.log("1");
    this.klijent = sessionStorage.getItem("klijent");
    if (this.klijent == null) {
      this.vratiPoruku("Пажња", "", "Морате бити пријављени како би резервисали карту!");
      this.router.navigate(["/home"]);
      return;
    } 
    console.log("2");
    this.mainService
      .proveriRezervaciju(this.klijent, polazakID)
      .subscribe((data) => {
        console.log("3");
            this.rezervacija=data;
            console.log("4")
            this.rezervisiKartuUnosUBazu(polazakID);
      });
     
     
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
  refresh(): void {
    window.location.reload();
}
}


