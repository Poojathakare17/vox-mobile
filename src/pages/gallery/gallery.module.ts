import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GalleryPageModule {}
