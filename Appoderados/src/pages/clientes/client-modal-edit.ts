
import { Component } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ClientesproviderProvider } from '../../providers/clientesprovider/clientesprovider';


@Component({
  templateUrl: './client-modal-edit.html'
})
export class ClientModalEditPage {
  client: any = {};
  error: any;
  constructor(public ClientesProviderProvider: ClientesproviderProvider,
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navCtrl: NavController) {
        if (this.params.data.id) {
            this.ClientesProviderProvider.get(this.params.get('id')).subscribe((client: any) => {
                this.client = client;
            });
        }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  edit(form: NgForm) {
      let id_client = this.client.id_Cliente;
      console.log (id_client)
    this.ClientesProviderProvider.edit(form, id_client).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Cliente editado.',
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