import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [GlobalvarProvider]
})
export class ContactPage {
  data: Observable<any>;
  contactDetails: object;
  phonenum: any;
  constructor(public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private callMobNumber: CallNumber, public iab: InAppBrowser, public globalvar: GlobalvarProvider) {
    this.getContactDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  callNumberFunc() {
    this.callMobNumber.callNumber("+971589802098", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  getContactDetails() {
    console.log(this.globalvar.adminUrl);
    this.data = this.http.get(this.globalvar.adminUrl + "getCompanyContactDetails");
    this.data.subscribe(data => {
      this.contactDetails = data.data;

    })
  }
  openBrowserWindowFunc() {
    const browser = this.iab.create('http://vox.ae/');
  }
  openemailWindowFunc() {
    const browser = this.iab.create('http://gmail.com/');
  }
}
