import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ApoderadosproviderProvider } from '../../providers/apoderadosprovider/apoderadosprovider';
@Component({
    templateUrl: './apoderado-modal.html'
})
export class ApoderadoModalPage {
    banks: Array<any>
    apoderado: any = {}
    error: any;
    constructor(public ApoderadosproviderProvider: ApoderadosproviderProvider, public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public navCtrl: NavController) {
            if (this.params.data.id) {
                this.ApoderadosproviderProvider.get(this.params.get('id')).subscribe((apoderado: any) => {
                  this.ApoderadosproviderProvider = apoderado;
                  this.apoderado.href = apoderado.href;
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
    save(form: NgForm) {
        this.ApoderadosproviderProvider.save(form).subscribe(result => {
            let toast = this.toastCtrl.create({
                message: "Apoderado creado. ",
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