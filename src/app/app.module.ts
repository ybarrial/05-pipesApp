import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// CONFIGURACIÓN DEL LOCALE DE LA APP
import localeEsPE from '@angular/common/locales/es-PE';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeItVA from '@angular/common/locales/it-VA';

// REGISTRAR TODOS LOS IDIOMAS A MANEJAR(importados)
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsPE );
registerLocaleData( localeFrCA );
registerLocaleData( localeItVA );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
