import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidenavService } from './sidenav/shared/sidenav.service';
import { AuthService } from './core/authentication/auth.service';
import { ElectronService } from './shared/electron/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { find } from 'lodash';
import { config } from './config';
import { fadeAnimation } from './animations/fade.animation';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState{
  message: string;
}

@Component({
  selector: 'public-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation], // register the animation
})

export class AppComponent {
  message$: Observable<string>;

  mobileSidenavOpened = false;
  year: string = moment().format('YYYY');
  constructor(
    private store: Store<AppState>,
    public router: Router,
    public sidenav: SidenavService,
    public translate: TranslateService,
    public auth: AuthService,
    public electronService: ElectronService,
  ) {
    this.message$ = this.store.select('message');
    translate.addLangs(config.langs.map((value: any) => value.value));
    translate.setDefaultLang('en');
    if (
      find(
        translate.getLangs(),
        (lang: string) => lang === translate.getBrowserLang(),
      )
    ) {
      translate.use(translate.getBrowserLang());
    }
    moment.locale(this.translate.currentLang);

    if (electronService.isElectron()) {
      // Elecron stuff
    } else {
      // Web stuff
    }
  }

  sidenavStatus(opened: boolean): boolean {
    this.sidenav.opened = opened;
    return opened;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.mobileSidenavOpened = false;
  }

  getRouterOutletState(outlet: RouterOutlet): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  spanishMessage(){
    this.store.dispatch({type: 'SPANISH'});
  }
  frenchMessage(){
    this.store.dispatch({type: 'FRENCH'});
  }
}
