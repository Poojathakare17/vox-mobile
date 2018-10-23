import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './blog';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    BlogPage,
    TimeAgoPipe
  ],
  imports: [
    IonicPageModule.forChild(BlogPage),
  ],
})
export class BlogPageModule {}
