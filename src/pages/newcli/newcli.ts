import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ClientdetailPage } from '../clientdetail/clientdetail';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';

/**
 * Generated class for the NewcliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcli',
  templateUrl: 'newcli.html',
  providers:[GlobalvarProvider]
})
export class NewcliPage {
  clients: any[] = [];
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalvar:GlobalvarProvider,public http:HttpClient) {
    this.getClientsData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcliPage');
  }
  itemTapped(event,item) {
    this.navCtrl.push(ClientdetailPage, {
      item: item
    });
  }
  getClientsData() {
    this.data = this.http.get(this.globalvar.adminUrl +"getAllClientInfo");
    this.data.subscribe(data => {
      this.clients =data;
      console.log(this.clients);
    });
  }

}
