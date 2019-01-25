import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductBoxComponent } from '../../components/product-box/product-box';
import { Product } from '../../models/product'
import { BoxEditComponent } from '../../components/box-edit/box-edit';
/**
 * Generated class for the ProductBoxEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-box-edit',
  templateUrl: 'product-box-edit.html'
})
export class ProductBoxEditComponent extends BoxEditComponent<Product> {

  constructor() {
    super();
    console.log('Hello ProductBoxEditComponent Component');
  }

}
