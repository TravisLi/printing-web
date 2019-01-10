import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../../models/product-category';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  private productCatUrl:string = ENV.restUrl + "/get/productCat";
  private productUrl:string = ENV.restUrl + "/get/product"

  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }

  public getProductCategroy():Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.productCatUrl);
  }

  public getProduct(prodCatId:number):Observable<Product[]>{
    let parm:string = `/${prodCatId}`;
    let reqUrl:string = this.productUrl + parm;
    console.log("Prduction Cat Id = " + prodCatId);

    return this.http.get<Product[]>(reqUrl);
  }

}
