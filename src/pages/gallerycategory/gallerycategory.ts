import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

/**
 * Generated class for the GallerycategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallerycategory',
  templateUrl: 'gallerycategory.html',
})
export class GallerycategoryPage {
  galleryCategories: any[] = [];
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalvar:GlobalvarProvider,public http:HttpClient) {
  }

  itemTapped(event,item) {
    this.navCtrl.push(GalleryPage, {
      item:item
    });
  }
  ionViewDidLoad() {
    this.data = this.http.get(this.globalvar.adminUrl +"getAllGalleryImages");
    this.data.subscribe(data => {
      console.log(data);
      this.galleryCategories =data;
      });
 
  }


}
