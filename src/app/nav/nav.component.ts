import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service'

import { Localization, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  extends Localization  implements OnInit {

  constructor(private auth: AuthService, public locale: LocaleService, public translation: TranslationService) {
        super(locale, translation);
   }

    public  logout(): void {
      this.auth.logout();
    alert('logout...');
  }

  ngOnInit() {
  }

}
