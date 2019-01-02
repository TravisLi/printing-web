import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerMaintenancePage } from './customer-maintenance';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    CustomerMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerMaintenancePage),
    ComponentsModule
  ],
})
export class CustomerMaintenancePageModule {}
