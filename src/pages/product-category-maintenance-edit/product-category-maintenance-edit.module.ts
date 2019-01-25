import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategoryMaintenanceEditPage } from './product-category-maintenance-edit';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProductCategoryMaintenanceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategoryMaintenanceEditPage),
    ComponentsModule
  ],
})
export class ProductCategoryMaintenanceEditPageModule {}
