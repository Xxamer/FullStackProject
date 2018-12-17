import { BancosProvider } from '../../providers/bancos/bancos';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './bank-modal.html'
})
export class BankModalPage {
  @ViewChild('name') name;
  @ViewChild('sede') sede;
  @ViewChild('pais') pais;
  bank: any = {};
  error: any;
  constructor(public BancosProvider: BancosProvider,
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navCtrl: NavController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  save(form: NgForm) {
    this.BancosProvider.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Banco añadido',
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