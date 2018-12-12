import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, ToastController, Slides } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
declare function require(name: string);
var bcrypt = require('bcryptjs');

@IonicPage()
@Component({
  
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public users: Array<any>;
  @ViewChild(Slides) slides: Slides;
  loading: Loading;
  registerCredentials = { username: '', password: '' };
  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
  }
  public homepage() {
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter() {
    this.auth.getUsers().subscribe(users => {
      this.users = users
    })
  }

  public login(registerCredentials) {
    try {
      this.users.forEach(user => {
        let passwd = bcrypt.compareSync(registerCredentials.password, user.password);
        if (user.username == registerCredentials.username && passwd == true) {
          this.homepage();
          throw new RangeError;
        } else {
        }
      });
    } catch (e) {
          let toasted = this.toastCtrl.create({
            message: "Login Succesful.",
            duration: 2000
          });
          toasted.present();
      }

    }
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}