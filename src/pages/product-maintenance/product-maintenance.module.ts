import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductMaintenancePage } from './product-maintenance';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductMaintenancePage),
    ComponentsModule
  ],
})
export class ProductMaintenancePageModule {}
