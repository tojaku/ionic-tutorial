import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PomocPage } from './pomoc';

@NgModule({
  declarations: [
    PomocPage,
  ],
  imports: [
    IonicPageModule.forChild(PomocPage),
  ],
})
export class PomocPageModule {}
