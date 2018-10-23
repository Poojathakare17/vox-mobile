import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BlogPage } from '../pages/blog/blog';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HomedetailPage } from '../pages/homedetail/homedetail';
import { ClientdetailPage } from '../pages/clientdetail/clientdetail';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { GallerycategoryPage } from '../pages/gallerycategory/gallerycategory';
import { ListPage } from '../pages/list/list';
import { SupportformPage }  from '../pages/supportform/supportform';
import { ContactPage } from '../pages/contact/contact';
import { TestimonialsPage } from '../pages/testimonials/testimonials';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { ServerurlProvider } from '../providers/serverurl/serverurl';
import { GlobalvarProvider } from '../providers/globalvar/globalvar';
import { GalleryPage } from '../pages/gallery/gallery';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { NewcliPage } from '../pages/newcli/newcli';
import { CommonModule } from "@angular/common";
import { StarRatingModule } from 'ionic3-star-rating';
import {TimeAgoPipe} from 'time-ago-pipe';
// import { ModalPage } from '../pages/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SupportformPage,
    HomedetailPage,
    ContactPage,
    TestimonialsPage,
    BlogPage,
    ClientdetailPage,
    GallerycategoryPage,
    GalleryPage,
    NewcliPage,
    TimeAgoPipe
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    CommonModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SupportformPage,
    HomedetailPage,
    ContactPage,
    TestimonialsPage,
    BlogPage,
    ClientdetailPage,
    GallerycategoryPage,
    GalleryPage,
    NewcliPage
    // ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    InAppBrowser,
    FileTransfer,
    File,
    Camera,
    ServerurlProvider,
    GlobalvarProvider
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
