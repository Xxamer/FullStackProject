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
import {OfficeModalPage} from '../pages/oficinas/office-modal'

import { ClientesproviderProvider } from '../providers/clientesprovider/clientesprovider';
import { OficinasproviderProvider } from '../providers/oficinasprovider/oficinasprovider';
import { OficinasPageModule } from '../pages/oficinas/oficinas.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BancosPage,
    ClientesPage,
    TabsPage,
    ApoderadosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BancosPageModule,
    OficinasPageModule
    
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
    TabsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BancosProvider,
    ClientesproviderProvider,
    OficinasproviderProvider
  ]
})
export class AppModule {}
