import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the EnlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enlaces',
  templateUrl: 'enlaces.html',
})
export class EnlacesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private webe: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnlacesPage');
  }

  abrirWeb(){
    this.webe.create("https://www.iesarroyoharnina.educarex.es/");
  }

  abrirMoodle(){
    this.webe.create("https://www.iesarroyoharnina.es/moodle/")
  }

  abrirRayuela(){
    this.webe.create("https://rayuela.educarex.es/");
  }
}
