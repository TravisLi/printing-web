import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductMaintenanceSelectPage } from './product-maintenance-select';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductMaintenanceSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductMaintenanceSelectPage),
    ComponentsModule
  ],
})
export class ProductMaintenanceSelectPageModule {}
