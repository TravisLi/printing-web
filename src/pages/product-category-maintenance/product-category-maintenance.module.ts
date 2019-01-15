import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module'
import { ProductCategoryMaintenancePage } from './product-category-maintenance';

@NgModule({
  declarations: [
    ProductCategoryMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenancePage),
    ComponentsModule
  ],
})
export class ProductCategoryMaintenancePageModule {}
