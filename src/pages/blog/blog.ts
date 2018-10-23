import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as _ from 'underscore';


/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
  providers:[GlobalvarProvider]
})
export class BlogPage {
  blogs: any[] = [];
  data:Observable<any>;
  public date: any;
  timeAgoDate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalvar:GlobalvarProvider,public http:HttpClient) {
    this.date = moment();
    this.getBlogsData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }
  getBlogsData() {
    this.data = this.http.get(this.globalvar.adminUrl +"getallblog");
    this.data.subscribe(data => {
      this.blogs =data;
      _.each(this.blogs,function(singleBlog){
        singleBlog.timeAgoDate =new Date(singleBlog.date)
        singleBlog.date = moment(singleBlog.date).format("MMMM Do YYYY");
        
      });
      console.log(this.blogs);
    });
  }
}
