import { BancosProvider } from '../../providers/bancos/bancos';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
    templateUrl: './bank-modal-edit.html'
})
export class BankModalEditPage {
    @ViewChild('name') name;
    @ViewChild('sede') sede;
    @ViewChild('pais') pais;
    public bank: any = {};
    error: any;
    constructor(public BancosProvider: BancosProvider,
        public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public navCtrl: NavController) {
        if (this.params.data.id) {
            this.BancosProvider.get(this.params.get('id')).subscribe((bank: any) => {
                this.bank = bank;
            });
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    edit(form: NgForm) {
        let id_bank = this.bank.id_Banco;
        console.log(id_bank);
        this.BancosProvider.edit(form, id_bank).subscribe(result => {
            let toast = this.toastCtrl.create({
                message: 'Banco actualizado',
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