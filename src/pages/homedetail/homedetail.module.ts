import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomedetailPage } from './homedetail';

@NgModule({
  declarations: [
    HomedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HomedetailPage),
  ],
})
export class HomedetailPageModule {}
