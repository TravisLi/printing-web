import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module'
import { ReportPage } from './report';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    ComponentsModule
  ],
})
export class ReportPageModule {}
