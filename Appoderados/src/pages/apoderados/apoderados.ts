import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, AlertController, List } from 'ionic-angular';
import{ApoderadosproviderProvider} from '../../providers/apoderadosprovider/apoderadosprovider';
import {ApoderadoModalPage} from './apoderado-modal'
import {ApoderadoModalEditPage} from './apoderado-modal-edit'

/**
 * Generated class for the OficinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apoderados',
  templateUrl: 'apoderados.html',
})
export class ApoderadosPage {
  private apoderados: Array<any>
  private banks: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public ApoderadosproviderProvider: ApoderadosproviderProvider,public modalCtrl: ModalController,  public toastCtrl: ToastController, private alertCtrl: AlertController  ) {
  }

  ionViewWillEnter() {
    this.ApoderadosproviderProvider.getApoderados().subscribe(apoderados =>{
      this.apoderados = apoderados;
    })

  }
  openModal() {
    let modal = this.modalCtrl.create(ApoderadoModalPage);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }

  openEdit(id) {
    let apoderadoid= id;
    let modal = this.modalCtrl.create(ApoderadoModalEditPage, apoderadoid);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }
  remove(apoderado) {
    this.ApoderadosproviderProvider.remove(apoderado.id_Apoderado).subscribe(response => {
      for (let i = 0; i < this.apoderados.length; i++) {
        if (this.apoderados[i] === apoderado) {
          this.apoderados.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Apoderado' + apoderado.nombre + 'borrado'
          });
          toast.present;
        }
      }
    })
  }
  Popup(apoderado) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: '¿Quieres borrar este apoderado? Si el apoderado ha gestionado alguna firma este no se borrará.',
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
            this.remove(apoderado)
          }
        }
      ]
    });
    alert.present();
  }


}
