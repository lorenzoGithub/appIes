import { ContactPage } from './../pages/contact/contact';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TabsPage } from './../pages/tabs/tabs';
import { CallNumber } from '@ionic-native/call-number';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InformacionPage } from '../pages/informacion/informacion';
import { LocalizationPage } from '../pages/localization/localization';
import { EnlacesPage } from '../pages/enlaces/enlaces';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformacionPage,
    LocalizationPage,
    EnlacesPage,
    ContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformacionPage,
    LocalizationPage,
    EnlacesPage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
