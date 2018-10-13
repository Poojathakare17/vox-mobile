import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { HomedetailPage } from '../homedetail/homedetail';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers:[GlobalvarProvider]
})
export class HelloIonicPage {
  data:Observable<any>;
  items:any;
  sliders:any;
  constructor(public http:HttpClient,public navCtrl: NavController, public globalvar:GlobalvarProvider) {
    this.getData();
    this.getSlider();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  }
  getData(){
    this.data = this.http.get(this.globalvar.adminUrl +"getallproperty");
    this.data.subscribe(data => {
      this.items =data.queryresult;
    })
  }
  getSlider(){
    this.data = this.http.get(this.globalvar.adminUrl +"getallimages");
    this.data.subscribe(data => {
      this.sliders =data.queryresult;
    })
  }
  itemTapped(event, item) {
    this.navCtrl.push(HomedetailPage, {
      item: item
    });
  }
}
