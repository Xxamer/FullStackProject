import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, AlertController, List } from 'ionic-angular';
import {OficinasproviderProvider} from '../../providers/oficinasprovider/oficinasprovider';
import {OfficeModalPage} from '../oficinas/office-modal'
/**
 * Generated class for the OficinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oficinas',
  templateUrl: 'oficinas.html',
})
export class OficinasPage {
  private offices: Array<any>
  private banks: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public OficinasproviderProvider: OficinasproviderProvider,public modalCtrl: ModalController,  public toastCtrl: ToastController, private alertCtrl: AlertController  ) {
  }

  ionViewWillEnter() {
    this.OficinasproviderProvider.getOffices().subscribe(offices =>{
      this.offices = offices;
    })

  }
  openModal(id) {
    let modal = this.modalCtrl.create(OfficeModalPage, id);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }
  remove(office) {
    this.OficinasproviderProvider.remove(office.id_Oficinas).subscribe(response => {
      for (let i = 0; i < this.offices.length; i++) {
        if (this.offices[i] === office) {
          this.offices.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Oficina' + office.nombre + 'borrada'
          });
          toast.present;
        }
      }
    })
  }
  Popup(office) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: '¿Quieres borrar esta oficina? Si en la oficina se han tramitado firmas el campo no se borrará.',
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
            this.remove(office)
          }
        }
      ]
    });
    alert.present();
  }

}
