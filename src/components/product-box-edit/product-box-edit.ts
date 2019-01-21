import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductBoxComponent } from 'components/product-box/product-box';
import { Product } from '../../models/product'
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
export class ProductBoxEditComponent extends ProductBoxComponent {

  @Output()
  delEvent = new EventEmitter<Product>();

  @Output()
  updateEvent = new EventEmitter<Product>();

  constructor() {
    super();
    console.log('Hello ProductBoxEditComponent Component');
  }

  public delProduct():void{
    this.delEvent.emit(this.product);
  }
  public updateProduct():void{
    this.updateEvent.emit(this.product);
  }

}
