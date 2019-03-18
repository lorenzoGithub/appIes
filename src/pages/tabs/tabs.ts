import { LocalizationPage } from './../localization/localization';
import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { EnlacesPage } from '../enlaces/enlaces';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  enlaces = EnlacesPage;
  loc = LocalizationPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
