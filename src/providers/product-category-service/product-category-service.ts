import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../../models/product-category';
import { Injectable } from '@angular/core';
import { DataService } from 'providers/data-service/data-service';

/*
  Generated class for the ProductCategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductCategoryService extends DataService<ProductCategory>{

  constructor(public http: HttpClient) {
    super('/productCategory', http);
    console.log('Hello ProductCategoryServiceProvider Provider');
  }

}
