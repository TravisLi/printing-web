import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderMaintenancePage } from './order-maintenance';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    OrderMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderMaintenancePage),
    ComponentsModule
  ],
})
export class OrderMaintenancePageModule {}
