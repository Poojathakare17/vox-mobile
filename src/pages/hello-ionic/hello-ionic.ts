import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {  NavController, NavParams } from 'ionic-angular';
import { HomedetailPage } from '../homedetail/homedetail';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
// @IonicPage()
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
    this.data = this.http.get(this.globalvar.adminUrl +"getAllFeatures");
    this.data.subscribe(data => {
      this.items =data;
      console.log(this.items);
    })
  }
  getSlider(){
    this.data = this.http.get(this.globalvar.adminUrl +"getAllSliders");
    this.data.subscribe(data => {
      this.sliders =data;
      console.log(this.sliders);
    })
  }
  itemTapped(event, item) {
    this.navCtrl.push(HomedetailPage, {
      item: item
    });
  }
}
