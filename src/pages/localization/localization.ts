import { CallNumber } from '@ionic-native/call-number';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-localization',
  templateUrl: 'localization.html',
})
export class LocalizationPage {

  private numberPhone = "924017778";

  constructor(public navCtrl: NavController, public navParams: NavParams, public caller: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizationPage');
  }

  call() {
    this.caller.callNumber(this.numberPhone, true);
  }

}
