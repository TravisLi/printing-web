import { Component } from '@angular/core';
import { ProductCategory } from '../../models/product-category';
import { BoxSelectComponent } from '../box-select/box-select';

/**
 * Generated class for the ProductCategoryBoxSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-category-box-select',
  templateUrl: 'product-category-box-select.html'
})
export class ProductCategoryBoxSelectComponent extends BoxSelectComponent<ProductCategory> {

  constructor() {
    super();
    console.log('Hello ProductCategoryBoxSelectComponent Component');
  }
  
}
