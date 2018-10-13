import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlertController,LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';


@Component({
  selector: 'page-supportform',
  templateUrl: 'supportform.html',
  providers:[GlobalvarProvider]
})
export class SupportformPage {
  data:Observable<any>;
  contact : FormGroup;
  public imageURI: any;
  actualImageName:any;
  // imgarr:any;
  constructor(public http:HttpClient, public alertCtrl: AlertController,private transfer: FileTransfer,
    private camera: Camera,public loadingCtrl: LoadingController, private globalVar:GlobalvarProvider) {
    this.contact = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      company: new FormControl('',Validators.required),
      phone:new FormControl('',[Validators.required, Validators.maxLength(10)]),
      tickettype: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required)
    });
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
        this.imageURI = imageData;
        this.uploadFile();
    }, (err) => {
      console.log(err);
      // this.presentToast(err);
    });
  }
  uploadFile() {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();
    
      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'file',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {}
      }
        fileTransfer.upload(this.imageURI, this.globalVar.adminUrl+'fileUpload', options)
          .then((data) => {
            console.log(data.response);
            if(data.response == "false"){
              console.log("resposne is false");
            }
            this.actualImageName = data.response;
          // this.imageURI=[];
          loader.dismiss();
          console.log("Image uploaded successfully");
          // this.imgArr.push(data.response);
        }, (err) => {
          console.log(err);
          loader.dismiss();
        });
        console.log();
    }
  supportFormSubmit() {
    
    this.contact.value.file = this.actualImageName;
    console.log(this.contact.value);
    this.data = this.http.post('http://voxdemo.com/E1003/vox-backend/index.php/json/submitContactForm',this.contact.value);
    this.data.subscribe(data => {
      console.log(data);
      if(data && data.value === true){
        this.showAlert();
        this.contact.reset();
        this.imageURI='';
      }

    })
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Thank you!',
      subTitle: 'Your Support request is sent!',
      buttons: ['OK']
    });
    alert.present();
  }
}
