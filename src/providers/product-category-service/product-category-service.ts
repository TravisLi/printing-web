import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../../models/product-category';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ENV } from '@app/env';

/*
  Generated class for the ProductCategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductCategoryService {

  private productCatUrl:string = ENV.restUrl + "/productCategory";

  constructor(public http: HttpClient) {
    console.log('Hello ProductCategoryServiceProvider Provider');
  }

  public getAllProductCat():Observable<ProductCategory[]> {
    let parm:string = `/all/get`;
    let reqUrl:string = this.productCatUrl + parm;
    return this.http.get<ProductCategory[]>(reqUrl);
  }

  public searchProductCat(name:string):Observable<ProductCategory[]>{
    let parm:string = `/search/${name}`;
    let reqUrl:string = this.productCatUrl + parm;
    console.log("Prduct Cat Name = " + name);

    return this.http.get<ProductCategory[]>(reqUrl);
  }

  public addProductCat(productCat:ProductCategory):Observable<Boolean>{
    let parm:string = `/add`;
    let reqUrl:string = this.productCatUrl + parm;
    console.log("Prduct Cat Name = " + name);

    return this.http.post<Boolean>(reqUrl, productCat);
  }

  public delProductCat(productCatId:number):Observable<Boolean>{
    let parm:string = `/del/${productCatId}`;
    let reqUrl:string = this.productCatUrl + parm;
    console.log("Prduct Cat Id = " + productCatId);

    return this.http.get<Boolean>(reqUrl);
  }

  public updateProductCat(productCat:ProductCategory):Observable<Boolean>{
    let parm:string = `/update`;
    let reqUrl:string = this.productCatUrl + parm;
    console.log(productCat);

    return this.http.put<Boolean>(reqUrl, productCat);
  }

  

}
