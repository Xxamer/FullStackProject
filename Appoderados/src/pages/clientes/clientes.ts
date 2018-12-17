import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClientesproviderProvider } from '../../providers/clientesprovider/clientesprovider';
import { AlertController } from 'ionic-angular';
import { ClientModalPage } from './client-modal';
import {ClientModalEditPage} from './client-modal-edit'

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  private clients: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ClientesproviderProvider: ClientesproviderProvider,
    public modalCtrl: ModalController, public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.ClientesproviderProvider.getClients().subscribe(clients => {
      this.clients = clients;
    })
  }
  openModal() {
    let modal = this.modalCtrl.create(ClientModalPage);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }

  openEdit(id) {
    let IdOffice = id
    let modal = this.modalCtrl.create(ClientModalEditPage, IdOffice);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())

  }

  remove(client) {
    this.ClientesproviderProvider.remove(client.id_Cliente).subscribe(response => {
      for (let i = 0; i < this.clients.length; i++) {
        if (this.clients[i] === client) {
          this.clients.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Cliente' + client.nombre + 'borrado'
          });
          toast.present;
        }
      }
    })
  }
  Popup(client) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Do you want to DELETE THIS ENTRY? REALLY? ARE YOU SURE?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'DELETE',
          role: "remove",
          handler: () => {
            this.remove(client)
          }
        }
      ]
    });
    alert.present();
  }

}
