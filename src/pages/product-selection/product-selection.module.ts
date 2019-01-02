import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductSelectionPage } from './product-selection';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductSelectionPage),
    ComponentsModule
  ],
})
export class ProductSelectionPageModule {}
