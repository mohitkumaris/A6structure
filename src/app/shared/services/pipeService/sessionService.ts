import {Injectable} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeNorwegian from '@angular/common/locales/nb';
import localeSwedish from '@angular/common/locales/sv';

@Injectable({providedIn: 'root'})
export class SessionService {

  private _locale: string;

  get locale(): string {
    return this._locale || 'en-US';
  }

  set locale(value: string) {
    this._locale = value;
  }

  registerCulture(culture: string) {
    if (!culture) {
      return;
    }
    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
      case 'nb-NO': {
        registerLocaleData(localeNorwegian);
        break;
      }
      case 'sv-SE': {
        registerLocaleData(localeSwedish);
        break;
      }
    }
  }
}
