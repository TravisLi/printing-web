import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryMaintenanceSelectPage } from './product-category-maintenance-select';

@NgModule({
  declarations: [
    ProductCategoryMaintenanceSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenanceSelectPage),
  ],
  exports: [
    ProductCategoryMaintenanceSelectPage
  ]
})
export class ProductCategoryMaintenanceSelectPageModule {}
