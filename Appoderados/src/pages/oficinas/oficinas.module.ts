import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OficinasPage } from './oficinas';
import {OficinasproviderProvider} from '../../providers/oficinasprovider/oficinasprovider';
import {OfficeModalPage} from './office-modal'

@NgModule({
  declarations: [
    OficinasPage,
    OfficeModalPage
  ],
  imports: [
    IonicPageModule.forChild(OficinasPage),
  ],
  providers: [
    OficinasproviderProvider
  ],
  entryComponents: [
    OfficeModalPage
  ],
})
export class OficinasPageModule {}
