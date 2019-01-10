import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCategorySelectionPage } from './product-category-selection';

@NgModule({
  declarations: [
    ProductCategorySelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCategorySelectionPage),
  ],
})
export class ProductCategorySelectionPageModule {}
