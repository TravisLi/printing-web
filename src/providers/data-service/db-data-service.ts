import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';

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
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:changeit')
    })};


  constructor(baseUrl:string, sortingJson:string, protected http: HttpClient) {
    console.log('Hello DbDataService Provider');
    this.baseUrl = "http://coolki.myqnapcloud.com:30272/db" + baseUrl ;
  }

  public getAll():Observable<T[]>{
    let sort:string = `?sort=${this.sortingJson}`;
    let requestUrl:string = this.baseUrl + sort;
    return this.http.get<T[]>(requestUrl,this.httpOptions);
  }

  public search(obj:T):Observable<T[]>{
    //console.log("Search " + T.name);
    let filter:string = '?filter=' + JSON.stringify(obj);
    let sort:string = `&sort=${this.sortingJson}`;
    let reqestUrl:string = this.baseUrl + filter + sort;

    return this.http.get<T[]>(reqestUrl, this.httpOptions);
  }

  public insert(obj:T):Observable<any>{
    let reqestUrl:string = this.baseUrl;
    return this.http.post(reqestUrl, obj, this.httpOptions);
  }

}
