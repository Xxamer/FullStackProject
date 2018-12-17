import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BancosPage } from '../pages/bancos/bancos';
import { ClientesPage } from '../pages/clientes/clientes';
import { OficinasPage } from '../pages/oficinas/oficinas';
import { ApoderadosPage } from '../pages/apoderados/apoderados';
import { BancosProvider } from '../providers/bancos/bancos';
import { HttpClientModule } from '@angular/common/http';
import { BancosPageModule } from '../pages/bancos/bancos.module';
import {LoginPage} from '../pages/login/login';

import { ClientesproviderProvider } from '../providers/clientesprovider/clientesprovider';
import { OficinasproviderProvider } from '../providers/oficinasprovider/oficinasprovider';
import { OficinasPageModule } from '../pages/oficinas/oficinas.module';
import { AuthService } from '../providers/auth-service/auth-service';
import {ApoderadosproviderProvider} from '../providers/apoderadosprovider/apoderadosprovider';
import {ApoderadoModalPage} from '../pages/apoderados/apoderado-modal';
import {ClientModalPage} from '../pages/clientes/client-modal';
import { BankModalEditPage } from '../pages/bancos/bank-modal-edit';
import { ClientModalEditPage } from '../pages/clientes/client-modal-edit';
import { OfficeModalEditPage } from '../pages/oficinas/office-modal-edit';
import { ApoderadoModalEditPage } from '../pages/apoderados/apoderado-modal-edit';
import { SignproviderProvider } from '../providers/signprovider/signprovider';
import { SignModalPage } from '../pages/list/sign-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BancosPage,
    ClientesPage,
    TabsPage,
    ApoderadosPage,
    LoginPage,
    ApoderadoModalPage,
    ClientModalPage,
    BankModalEditPage,
    ClientModalEditPage,
    OfficeModalEditPage,
    ApoderadoModalEditPage,
    SignModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BancosPageModule,
    OficinasPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BancosPage,
    ClientesPage,
    OficinasPage,
    ApoderadosPage,
    TabsPage,
    LoginPage,
    ApoderadoModalPage,
    ClientModalPage,
    BankModalEditPage ,
    ClientModalEditPage,
    OfficeModalEditPage,
    ApoderadoModalEditPage,
    SignModalPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BancosProvider,
    ApoderadosproviderProvider,
    ClientesproviderProvider,
    OficinasproviderProvider,
    AuthService,
    SignproviderProvider,
  ]
})
export class AppModule {}
