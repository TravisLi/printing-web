import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductMaintenanceEditPage } from './product-maintenance-edit';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProductMaintenanceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductMaintenanceEditPage),
    ComponentsModule
  ],
})
export class ProductMaintenanceEditPageModule {}
