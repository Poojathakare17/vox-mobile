import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ClientdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientdetail',
  templateUrl: 'clientdetail.html',
})
export class ClientdetailPage {
client_tab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client_tab = "project";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientdetailPage');
  }

}
