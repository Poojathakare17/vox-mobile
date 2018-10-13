import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';


/**
 * Generated class for the HomedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homedetail',
  templateUrl: 'homedetail.html',
  providers:[GlobalvarProvider]
})
export class HomedetailPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalvar :GlobalvarProvider) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomedetailPage');
  }
}
