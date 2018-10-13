import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

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
})
export class TestimonialsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestimonialsPage');
  }
  openModal(){
    const myModal = this.modalCtrl.create('ModalPage');
    myModal.present();
  }

}
