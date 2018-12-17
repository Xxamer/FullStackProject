import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, AlertController, List } from 'ionic-angular';
import {SignproviderProvider} from '../../providers/signprovider/signprovider';
import {SignModalPage} from './sign-modal';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  private signs: Array<any>
  private apoderados: Array<any>
  private offices: Array<any>

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public SignproviderProvider: SignproviderProvider,
     public modalCtrl: ModalController, 
     public toastCtrl: ToastController, 
     private alertCtrl: AlertController) {
    
  }
  ionViewWillEnter() {
    this.SignproviderProvider.getsigns().subscribe(signs =>{
      this.signs = signs;
    })
  }
  openModal() {
    let modal = this.modalCtrl.create(SignModalPage);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }
  remove(sign) {
    this.SignproviderProvider.remove(sign.id_Firma).subscribe(response => {
      for (let i = 0; i < this.signs.length; i++) {
        if (this.signs[i] === sign) {
          this.signs.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Firma eliminada.'
          });
          toast.present;
        }
      }
    })
  }

  Popup(sign) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: '¿Quiere borrar esta firma?',
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
            this.remove(sign)
          }
        }
      ]
    });
    alert.present();
  }

}
