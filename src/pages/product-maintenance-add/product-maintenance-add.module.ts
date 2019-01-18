import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductMaintenanceAddPage } from './product-maintenance-add';

@NgModule({
  declarations: [
    ProductMaintenanceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductMaintenanceAddPage),
  ],
})
export class ProductMaintenanceAddPageModule {}
