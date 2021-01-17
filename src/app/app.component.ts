import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _cookieService:CookieService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Ред вожње",
        url   : "/main",
        icon  : "home"
      },
      {
        title : "Мој налог",
        url   : "/moj-nalog",
        icon  : "person"
      },
      {
        title : "Моје резервације",
        url   : "/moje-rezervacije",
        icon  : "ticket"
      },
    ]
  }
}
