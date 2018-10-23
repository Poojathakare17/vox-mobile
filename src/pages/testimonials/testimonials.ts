import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';

/**
 * Generated class for the TestimonialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testimonials',
  templateUrl: 'testimonials.html',
  providers:[GlobalvarProvider]
})
export class TestimonialsPage {
  data:Observable<any>;
  items: any[] = [];
  constructor(public navParams: NavParams, public modalCtrl: ModalController,public http:HttpClient,public navCtrl: NavController, public globalvar:GlobalvarProvider) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.getTestimonialsData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestimonialsPage');
  }
  openModal(item){
    const myModal = this.modalCtrl.create('ModalPage',{item: item});
    myModal.present();
  }
  getTestimonialsData(){
    this.data = this.http.get(this.globalvar.adminUrl +"getAllTestimonials");
    this.data.subscribe(data => {
      this.items =data;
      console.log(this.items);
    })
  }

}
