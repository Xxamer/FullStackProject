import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {OficinasproviderProvider } from '../../providers/oficinasprovider/oficinasprovider';
@Component({
    templateUrl: './office-modal.html'
  })
  export class OfficeModalPage{
     banks: Array<any>
      office: any = {}
      error: any;
      constructor(public OficinasproviderProvider: OficinasproviderProvider,
        public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public navCtrl: NavController) {
      }
      ionViewWillEnter() {
    this.OficinasproviderProvider.getBanks().subscribe(banks =>{
      this.banks = banks;
    })
  }
      dismiss() {
        this.viewCtrl.dismiss();
      }
      save(form: NgForm) {
        let update: boolean = form['href'];
        this.OficinasproviderProvider.save(form).subscribe(result => {
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