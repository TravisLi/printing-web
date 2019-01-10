import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCategory } from 'models/product-category';

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
export class ProductCategoryBoxComponent {

  @Input()
  productCategory:ProductCategory

  @Output()
  selectEvent = new EventEmitter<ProductCategory>();

  constructor() {
    console.log('Hello ProductCategoryBoxComponent Component');
  }

  public selectProductCat():void{
    this.selectEvent.emit(this.productCategory);
  }

}