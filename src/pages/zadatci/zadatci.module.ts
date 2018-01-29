import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZadatciPage } from './zadatci';

@NgModule({
  declarations: [
    ZadatciPage,
  ],
  imports: [
    IonicPageModule.forChild(ZadatciPage),
  ],
})
export class ZadatciPageModule {}
