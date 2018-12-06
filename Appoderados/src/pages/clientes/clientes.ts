import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import {ClientesproviderProvider} from '../../providers/clientesprovider/clientesprovider';
import { AlertController } from 'ionic-angular';

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
  public modalCtrl: ModalController,  public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }
  ionViewWillEnter() {
    this.ClientesproviderProvider.getClients().subscribe(clients =>{
      this.clients = clients;
    })
  }

}
