import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerRegisterPage } from './customer-register';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CustomerRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerRegisterPage),
    ComponentsModule
  ],
})
export class CustomerRegisterPageModule {}
