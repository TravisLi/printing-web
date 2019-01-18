import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductService {

  private productUrl:string = ENV.restUrl + "/product";

  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }

  public getProduct(prodCatId:number):Observable<Product[]>{
    let parm:string = `/get/${prodCatId}`;
    let reqUrl:string = this.productUrl + parm;
    console.log("Prduction Cat Id = " + prodCatId);

    return this.http.get<Product[]>(reqUrl);
  }

  public searchProduct(name:string):Observable<Product[]>{
    let parm:string = `/search/${name}`;
    let reqUrl:string = this.productUrl + parm;
    console.log("Prduct Name = " + name);

    return this.http.get<Product[]>(reqUrl);
  }

  public addProduct(product:Product):Observable<Boolean>{
    let parm:string = `/add`;
    let reqUrl:string = this.productUrl + parm;
    console.log("Prduct Name = " + name);

    return this.http.post<Boolean>(reqUrl, product);
  }

  public delProduct(productId:number):Observable<Boolean>{
    let parm:string = `/del/${productId}`;
    let reqUrl:string = this.productUrl + parm;
    console.log("Prduct Name = " + name);

    return this.http.get<Boolean>(reqUrl);
  }

  public updateProduct(product:Product):Observable<Boolean>{
    let parm:string = `/update`;
    let reqUrl:string = this.productUrl + parm;
    console.log("Prduct Name = " + name);

    return this.http.put<Boolean>(reqUrl, product);
  }

}
