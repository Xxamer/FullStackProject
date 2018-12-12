
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ClientesproviderProvider } from '../../providers/clientesprovider/clientesprovider';


@Component({
  templateUrl: './client-modal.html'
})
export class ClientModalPage {
  client: any = {};
  error: any;
  constructor(public ClientesProviderProvider: ClientesproviderProvider,
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navCtrl: NavController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  save(form: NgForm) {
    this.ClientesProviderProvider.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Cliente añadido.',
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