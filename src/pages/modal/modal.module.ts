import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ModalPageModule {}
