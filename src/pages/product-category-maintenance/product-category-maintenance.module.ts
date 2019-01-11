import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryMaintenancePage } from './product-category-maintenance';

@NgModule({
  declarations: [
    ProductCategoryMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenancePage),
  ],
})
export class ProductCategoryMaintenancePageModule {}
