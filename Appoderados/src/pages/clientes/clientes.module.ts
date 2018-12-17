import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
import { ClientModalPage} from './client-modal';

@NgModule({
  declarations: [
    ClientesPage,
    ClientModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesPage),
  ],
entryComponents: [
  ClientModalPage
]
})
export class ClientesPageModule {}
