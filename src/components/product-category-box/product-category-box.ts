import { Component } from '@angular/core';
import { ProductCategory } from '../../models/product-category';
import { BoxComponent } from '../../components/box/box';

/**
 * Generated class for the ProductCategoryBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-category-box',
  templateUrl: 'product-category-box.html'
})
export class ProductCategoryBoxComponent extends BoxComponent<ProductCategory> {

  constructor() {
    super();
    console.log('Hello ProductCategoryBoxComponent Component');
  }

}