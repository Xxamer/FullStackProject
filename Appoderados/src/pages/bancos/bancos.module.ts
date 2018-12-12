import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BancosPage } from './bancos';
import {BankModalPage} from './bank-modal';
import { BancosProvider } from '../../providers/bancos/bancos';

@NgModule({
  declarations: [
    BankModalPage
  ],
  imports: [
    IonicPageModule.forChild(BancosPage),
  ],
  providers: [
    BancosProvider
  ],
  entryComponents: [
    BankModalPage,
  ]
})
export class BancosPageModule {}
