import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductBoxComponent } from 'components/product-box/product-box';
import { Product } from '../../models/product'

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
export class ProductBoxSelectComponent extends ProductBoxComponent {

  @Output()
  selectEvent = new EventEmitter<Product>();

  constructor() {
    super();
    console.log('Hello ProductBoxSelectComponent Component');
  }

  public selectProduct():void{
    this.selectEvent.emit(this.product);
  }

}
