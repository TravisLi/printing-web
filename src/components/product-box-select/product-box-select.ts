import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product'
import { BoxSelectComponent } from '../../components/box-select/box-select';

/**
 * Generated class for the ProductBoxSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-box-select',
  templateUrl: 'product-box-select.html'
})
export class ProductBoxSelectComponent extends BoxSelectComponent<Product> {

  constructor() {
    super();
    console.log('Hello ProductBoxSelectComponent Component');
  }

}
