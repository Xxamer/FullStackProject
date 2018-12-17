import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {SignproviderProvider} from '../../providers/signprovider/signprovider';

@Component({
    templateUrl: './sign-modal.html'
  })
  export class SignModalPage{
     apoderados: Array<any> 
      offices: Array<any> 
      sign: any ={}
      error: any;
      constructor(public SignproviderProvider: SignproviderProvider,public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public navCtrl: NavController) {
      }
      ionViewWillEnter() {
    this.SignproviderProvider.getOffices().subscribe(offices =>{
      this.offices =  offices;
    })
    this.SignproviderProvider.getApoderados().subscribe(apoderados =>{
        this.apoderados = apoderados;
      })
  }
  
      dismiss() {
        this.viewCtrl.dismiss();
      }
      save(form: NgForm) {
        this.SignproviderProvider.save(form).subscribe(result => {
          let toast = this.toastCtrl.create({
            message: "Oficina añadida. ",
            duration: 2000
          });
          toast.present();
          this.dismiss();
        }, error => this.error = error)
      }
      ionViewDidLoad() {
        setTimeout(() => {
        },150);
      }
  }