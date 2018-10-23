import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';


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
  providers:[GlobalvarProvider]
})
export class ClientdetailPage {
  selectedItem: any;
  client_tab:any;
  techArray:any;
  images:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalvar:GlobalvarProvider) {
    this.client_tab = "project";
    this.selectedItem = navParams.get('item');
    this.images = this.selectedItem.multipleimages;
  }

  ionViewDidLoad() {
    this.techArray = this.selectedItem.tect.split(",");
  }

  

}
