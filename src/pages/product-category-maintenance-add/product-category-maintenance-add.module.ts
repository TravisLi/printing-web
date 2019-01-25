import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryMaintenanceAddPage } from './product-category-maintenance-add';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProductCategoryMaintenanceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenanceAddPage),
    ComponentsModule
  ],
})
export class ProductCategoryMaintenanceAddPageModule {}
