import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { ProductCategorySelectionPage } from './product-category-selection';

@NgModule({
  declarations: [
    ProductCategorySelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategorySelectionPage),
    ComponentsModule
  ],
})
export class ProductCategorySelectionPageModule {}
