import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  providers:[GlobalvarProvider]
})
export class ModalPage {
  selectedTestimonial:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public globalvar:GlobalvarProvider) {
    this.selectedTestimonial = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
