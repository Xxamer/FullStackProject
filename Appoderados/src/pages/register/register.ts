import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController, IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  credential: any = {};
  error: any;
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, 
    private auth: AuthService,
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navCtrl: NavController) {
  }
 
  save(form: NgForm) {
    this.auth.save(form).subscribe(result => {
      this.navCtrl.push(LoginPage);
      let toast = this.toastCtrl.create({
        message: "usuario añadido.",
        duration: 2000
      });
      toast.present();
    }, error => this.error = error)
  }
}