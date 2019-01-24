import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryMaintenanceAddPage } from './product-category-maintenance-add';

@NgModule({
  declarations: [
    ProductCategoryMaintenanceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenanceAddPage),
  ],
})
export class ProductCategoryMaintenanceAddPageModule {}
