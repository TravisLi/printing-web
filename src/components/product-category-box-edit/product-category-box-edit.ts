import { Component, EventEmitter, Output } from '@angular/core';
import { BoxEditComponent } from '../../components/box-edit/box-edit';
import { ProductCategory } from '../../models/product-category';
/**
 * Generated class for the ProductCategoryBoxEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-category-box-edit',
  templateUrl: 'product-category-box-edit.html'
})
export class ProductCategoryBoxEditComponent extends BoxEditComponent<ProductCategory> {

  constructor() {
    super();
    console.log('Hello ProductCategoryBoxEditComponent Component');
  }

}
