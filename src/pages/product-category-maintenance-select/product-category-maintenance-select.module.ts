import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryMaintenanceSelectPage } from './product-category-maintenance-select';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProductCategoryMaintenanceSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenanceSelectPage),
    ComponentsModule
  ],
  exports: [
    ProductCategoryMaintenanceSelectPage
  ]
})
export class ProductCategoryMaintenanceSelectPageModule {}
