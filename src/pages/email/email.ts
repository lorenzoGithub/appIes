import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  asunto = '';
  cuerpo = '';
  para = 'ies.arroyoharnina@edu.juntaex.es';
  constructor(public navCtrl: NavController, public navParams: NavParams,public email:EmailComposer) {
  }
  send() {
    let email = {
      cc: [],
      bcc: [],
      to: this.para,
      subject: this.asunto,
      body: this.cuerpo,
      isHtml: false,
      app: "Gmail"

    }
    this.email.open(email).catch(e => (console.error(e)));
  }
  
}
