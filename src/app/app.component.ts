import { environment } from 'src/environments/environment';
import { I18nService } from './cores/i18n.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'revenue';

  constructor(private i18nService: I18nService) {
    this._initLang();
  }

  private _initLang() {
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
    this.i18nService.language = 'vi-VN';
  }
}
