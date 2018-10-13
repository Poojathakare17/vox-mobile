import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

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
  posts = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event) {
    this.navCtrl.push(GalleryPage, {
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GallerycategoryPage');
    this.posts = [
      {
        description: 'Trying out digital painting',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/63/b0/d563b08194f0a92cc7d381f7f8582a08.jpg',
        title:'Health'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b586.jpg',
        title:'Real Estate'
      },
      {
        description: 'Look at this amazing clay humming bird I crafted!',
        image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg',
        title:'Business'
      },
      {
        description: 'Origami tullip tutorial',
        image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0f82.jpg',
        title:'General Trading'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e03a.jpg',
        title:'Education'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2bd6.jpg',
        title:'Tourism'
      },
      {
        description: 'Delicious chocolate bread recipe!',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb594a4.jpg',
        title:'Interiors'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c057726800a0.jpg',
        title:'Jewellery'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffdbda.jpg',
        title:'Rebranding'
      },
      {
        description: '',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba1ac.jpg',
        title:'Shopping'
      },
      {
        description: 'Fastest car of all times',
        image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg',
        title:'Restaurants'
      },
    ];
  
  }

}
