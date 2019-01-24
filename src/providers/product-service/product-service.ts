import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';
import { DataService } from '../data-service/data-service';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductService extends DataService<Product>{

  constructor(public http: HttpClient) {
    super('/product', http)
    console.log('Hello ProductServiceProvider Provider');
  }

  public getByProducCatId(prodCatId:number):Observable<Product[]>{
    console.log('Get By Product Category id');
    let parm:string = DataService.GET + `/${prodCatId}`;
    let reqUrl:string = this.baseUrl + parm;
    console.log("Id = " + prodCatId);

    return this.http.get<Product[]>(reqUrl);
  }

}
