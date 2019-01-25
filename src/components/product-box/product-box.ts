import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product'
import { BoxComponent } from '../../components/box/box';

/**
 * Generated class for the ProductBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-box',
  templateUrl: 'product-box.html'
})
export class ProductBoxComponent extends BoxComponent<Product> {

  constructor() {
    super();
    console.log('Hello ProductBoxComponent Component');
  }

}
