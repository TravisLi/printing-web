import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductMaintenanceAddPage } from './product-maintenance-add';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProductMaintenanceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductMaintenanceAddPage),
    ComponentsModule
  ],
})
export class ProductMaintenanceAddPageModule {}
