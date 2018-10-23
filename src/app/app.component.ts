import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ListPage } from '../pages/list/list';
import { SupportformPage } from '../pages/supportform/supportform';
import { ContactPage } from '../pages/contact/contact';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestimonialsPage } from '../pages/testimonials/testimonials';
import { BlogPage } from '../pages/blog/blog';
import { GallerycategoryPage } from '../pages/gallerycategory/gallerycategory';
import { NewcliPage } from '../pages/newcli/newcli';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, icon:string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', icon: 'home', component: HelloIonicPage },
      // { title: 'List', component: ListPage },
      { title: 'Support Form',icon: 'paper', component: SupportformPage },
      { title: 'Contact Us',icon: 'contact' ,component: ContactPage },
      { title: 'Clients',icon: 'people' ,component: NewcliPage },
      { title: 'Blogs',icon: 'list' ,component: BlogPage },
      { title: 'Testimonials',icon: 'people' ,component: TestimonialsPage },
      { title: 'Gallery',icon: 'camera' ,component: GallerycategoryPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
