import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  galleryImages : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalvar:GlobalvarProvider) {
    this.galleryImages = navParams.get('item');
    console.log(this.galleryImages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
