import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarProvider {
  public adminUrl:string;
  public imageUrl:string;
  constructor(public http: HttpClient) {
    console.log('Hello GlobalvarProvider Provider');
    this.adminUrl = "http://voxdemo.com/E1003/voxapp/index.php/json/";
    this.imageUrl = "http://voxdemo.com/E1003/voxapp/uploads/";
    // this.adminUrl = "http://voxdemo.com/E1003/vox-backend/index.php/json/";
    // this.imageUrl = "http://voxdemo.com/E1003/vox-backend/uploads/";
  }

}
