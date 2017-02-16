import { Component, OnInit } from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'app-generic-report',
  templateUrl: './generic-report.component.html',
  styleUrls: ['./generic-report.component.css']
})
export class GenericReportComponent   extends Localization implements OnInit {

   constructor(private auth: AuthService, public locale: LocaleService, public translation: TranslationService) {
        super(locale, translation);
   }

  ngOnInit() {
  }

}
