import { Component} from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ApoderadosproviderProvider } from '../../providers/apoderadosprovider/apoderadosprovider';
@Component({
    templateUrl: './apoderado-modal-edit.html'
})
export class ApoderadoModalEditPage {
    banks: Array<any>
    apoderado: any = {}
    error: any;
    constructor(public ApoderadosproviderProvider: ApoderadosproviderProvider, public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public navCtrl: NavController) {
            if (this.params.data.id) {
                this.ApoderadosproviderProvider.get(this.params.get('id')).subscribe((apoderado: any) => {
                  this.apoderado = apoderado;
                });
              }
    }
    ionViewWillEnter() {
        this.ApoderadosproviderProvider.getBanks().subscribe(banks => {
            this.banks = banks;
        })
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    edit(form: NgForm) {
        let id_apoderado = this.apoderado.id_Apoderado
        this.ApoderadosproviderProvider.edit(form, id_apoderado).subscribe(result => {
            let toast = this.toastCtrl.create({
                message: "Apoderado editado. ",
                duration: 2000
            });
            toast.present();
            this.dismiss();
        }, error => this.error = error)
    }
    ionViewDidLoad() {
        setTimeout(() => {
        }, 150);
    }
}