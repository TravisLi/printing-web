import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { ProductCategory } from '../../models/product-category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbDataService } from '../../providers/data-service/db-data-service';

/*
  Generated class for the ProductCategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductCategoryService extends DbDataService<ProductCategory>{

  constructor(public http: HttpClient) {
    super("/productCategory","{name:1}", http);
    //super();
    console.log('Hello ProductCategoryServiceProvider Provider');
  }

  /*public getProductCat(filter:String, sort:String):Observable<any>{
    console.log("getProductCat");
    let header:Headers = new Headers();
    header.append("Authorization", "Basic " + btoa("admin:changeit"));
    header.append("Authorization", "Basic " + btoa("admin:changeit"));
    //let options = new RequestOptions({ headers: header });
    let filterStr:string = `filter={${filter}}`;
    let sortStr:string = `sort={${sort}}`
    return this.http.get("", options);
   
  }*/

  public addProductCat(c:ProductCategory):Observable<any>{
    console.log('Add Product Category')
    this.objToJson(c);
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:changeit')
      })};

    return this.http.post("http://coolki.myqnapcloud.com:30272/db/productCategory", c, httpOptions);
  }

  private objToJson(obj:ProductCategory): void {
    let propertyArray:any[] = Object.getOwnPropertyNames(obj);
    console.log(propertyArray);
    for(let property of propertyArray){
      console.log("property=" + property);
      console.log("value=" + obj[property]);
    }

}

}
