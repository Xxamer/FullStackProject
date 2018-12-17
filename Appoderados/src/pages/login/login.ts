import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, ToastController, Slides, ViewController, MenuController } from 'ionic-angular';
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
    public menuCtrl: MenuController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
    this.menuCtrl.swipeEnable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
   }
  public homepage() {
    
    this.navCtrl.setRoot(HomePage);
    
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
         try{
           this.showLoading();
          this.homepage();
          throw new RangeError;
         }catch(e){
          let toasted = this.toastCtrl.create({
            message: "Login correcto.",
            duration: 2000
          });
          toasted.present();
         } 
        } else {
        }
      });
    } catch (e) {
          let toasted = this.toastCtrl.create({
            message: "Error de conexión al servidor.",
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