import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApoderadosPage } from './apoderados';
import { ApoderadosproviderProvider } from '../../providers/apoderadosprovider/apoderadosprovider';
import {ApoderadoModalPage} from './apoderado-modal'


@NgModule({
  declarations: [
    ApoderadosPage,
    ApoderadoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ApoderadosPage),
  ],
  entryComponents: [
    ApoderadosproviderProvider,
     ApoderadoModalPage,
  ]
})
export class ApoderadosPageModule {}
