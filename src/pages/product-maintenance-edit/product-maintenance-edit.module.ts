import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductMaintenanceEditPage } from './product-maintenance-edit';

@NgModule({
  declarations: [
    ProductMaintenanceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductMaintenanceEditPage),
  ],
})
export class ProductMaintenanceEditPageModule {}
