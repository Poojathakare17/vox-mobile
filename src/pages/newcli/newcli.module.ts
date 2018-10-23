import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewcliPage } from './newcli';

@NgModule({
  declarations: [
    NewcliPage,
  ],
  imports: [
    IonicPageModule.forChild(NewcliPage),
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class NewcliPageModule {}
