import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import {BancosProvider} from '../../providers/bancos/bancos';
import {BankModalPage} from '../bancos/bank-modal';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the BancosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bancos',
  templateUrl: 'bancos.html',
})
export class BancosPage {
  private banks: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public BancosProvider: BancosProvider,public modalCtrl: ModalController,  public toastCtrl: ToastController, private alertCtrl: AlertController  ) {
  }
  ionViewWillEnter() {
    this.BancosProvider.getBanks().subscribe(banks =>{
      this.banks = banks;
    })
  }
  
  openModal() {
    let modal = this.modalCtrl.create(BankModalPage);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }
  remove(bank) {
    this.BancosProvider.remove(bank.id_Banco).subscribe(response => {
      for (let i = 0; i < this.banks.length; i++) {
        if (this.banks[i] === bank) {
          this.banks.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'movie' + bank.nombre + 'deleted'
          });
          toast.present;
        }
      }
    })
  }
  Popup(bank) {
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
          text: 'DELETE, BE CAREFUL',
          role: "remove",
          handler: () => {
            this.remove(bank)
          }
        }
      ]
    });
    alert.present();
  }

  edit(bank) {
    this.BancosProvider.remove(bank.id_Banco).subscribe(response => {
      for (let i = 0; i < this.banks.length; i++) {
        if (this.banks[i] === bank) {
          this.banks.splice(i, 1);
           let modal = this.modalCtrl.create(BankModalPage, bank.id_Banco);
            modal.present();
          modal.onDidDismiss(() => this.ionViewWillEnter())
        }
      }
    })
  }

  

}
