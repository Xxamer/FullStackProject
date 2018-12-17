import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {OficinasproviderProvider } from '../../providers/oficinasprovider/oficinasprovider';
@Component({
    templateUrl: './office-modal-edit.html'
  })
  export class OfficeModalEditPage{
     banks: Array<any>
      office: any = {}
      error: any;
      constructor(public OficinasproviderProvider: OficinasproviderProvider,public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public navCtrl: NavController) {
        if (this.params.data.id) {
          this.OficinasproviderProvider.get(this.params.get('id')).subscribe((office: any) => {
            this.office = office;
          });
        }
      }
      ionViewWillEnter() {
    this.OficinasproviderProvider.getBanks().subscribe(banks =>{
      this.banks = banks;
    })
  }
      dismiss() {
        this.viewCtrl.dismiss();
      }
      edit(form: NgForm) {
          let id_office = this.office.id_Oficinas
        this.OficinasproviderProvider.edit(form,id_office).subscribe(result => {
          let toast = this.toastCtrl.create({
            message: "Oficina actualizada. ",
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