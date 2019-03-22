import { HttpClient,HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';
import { DbKey } from 'models/db-key';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbDataService<T> {

  protected baseUrl:string;
  protected header: HttpHeaders;
  protected sortingJson:string;
  private httpHeader:HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:changeit')
  })
  private httpBodyOptions = {
    headers: this.httpHeader
  };

  private httpResponseOptions = {
    headers: this.httpHeader,
    observe: "response" as 'body'
  };

  constructor(baseUrl:string, sortingJson:string, protected http: HttpClient) {
    console.log('Hello DbDataService Provider');
    this.sortingJson = sortingJson;
    this.baseUrl = "http://coolki.myqnapcloud.com:30272/db" + baseUrl ;
  }

  public getAll():Observable<T[]>{
    let sort:string = `?sort=${this.sortingJson}`;
    let requestUrl:string = this.baseUrl + sort;
    return this.http.get<T[]>(requestUrl,this.httpBodyOptions);
  }

  public search(obj:T):Observable<T[]>{
    //console.log("Search " + T.name);
    let filter:string = '?np&filter=' + this.jsonStrToRegexExpress(obj);
    let sort:string = `&sort=${this.sortingJson}`;
    let reqestUrl:string = this.baseUrl + filter + sort;

    return this.http.get<T[]>(reqestUrl, this.httpBodyOptions);
  }

  public insert(obj:T):Observable<any>{
    let reqestUrl:string = this.baseUrl;
    return this.http.post(reqestUrl, obj, this.httpBodyOptions);
  }

  public delete(dbKey:DbKey):Observable<HttpResponse<any>>{
    let reqestUrl:string = this.baseUrl + `/${dbKey.$oid}`;
    return this.http.delete<HttpResponse<any>>(reqestUrl, this.httpResponseOptions);
  }

  private jsonStrToRegexExpress(obj:T):string{

    let valueMap:Map<string, string> = new Map();
    
    function replacer(key, value) {
      // Filtering out properties
      if (typeof value === 'string') {
        console.log("Type of String");
        valueMap.set(`"${value}"`, `/^${value}/`);
        return `${value}`;
      }
      return value;
    }

    let result:string = JSON.stringify(obj, replacer);
    console.log(result);
    
    function replacer2(value, key, map){
      console.log("key:"+key);
      result = result.replace(key, valueMap.get(key));
      console.log("Replaced result:"+result);
    }

    valueMap.forEach(replacer2);

    return result;

  }

}
