import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestimonialsPage } from './testimonials';

@NgModule({
  declarations: [
    TestimonialsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestimonialsPage),
  ],
})
export class TestimonialsPageModule {}
