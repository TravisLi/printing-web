import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';
import { T, t } from '@angular/core/src/render3';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class DataService<T> {

  protected baseUrl:string;
  protected static readonly ALL:string = '/all';
  protected static readonly GET:string = '/get';
  protected static readonly INSERT:string = '/insert';
  protected static readonly SEARCH:string = '/search';
  protected static readonly UPDATE:string = '/update';
  protected static readonly DELETE:string = '/delete';

  constructor(baseUrl:string, public http: HttpClient) {
    console.log('Hello DataService Provider');
    this.baseUrl = ENV.restUrl + baseUrl;
  }

  public getAll():Observable<T[]>{
    console.log("Get All" + T.name);
    let parm:string = DataService.GET + DataService.ALL;
    let reqUrl:string = this.baseUrl + parm;
  
    return this.http.get<T[]>(reqUrl);
  }

  public get(id:number):Observable<T>{
    console.log("Get " + T.name);
    let parm:string = DataService.GET + `/${id}`;
    let reqUrl:string = this.baseUrl + parm;
    console.log("Id = " + id);

    return this.http.get<T>(reqUrl);
  }

  public search(name:string):Observable<T[]>{
    console.log("Search " + T.name);
    let parm:string = DataService.SEARCH + `/${name}`;
    let reqUrl:string = this.baseUrl + parm;
    console.log("Name = " + name);

    return this.http.get<T[]>(reqUrl);
  }

  public insert(obj:T):Observable<Boolean>{
    console.log("Add " + T.name);
    let parm:string = DataService.INSERT;
    let reqUrl:string = this.baseUrl + parm;
    console.log(obj);

    return this.http.post<Boolean>(reqUrl, obj);
  }

  public delete(id:number):Observable<Boolean>{
    console.log("Delete " + T.name);
    let parm:string = DataService.DELETE + `/${id}`;
    let reqUrl:string = this.baseUrl + parm;
    console.log("id = " + id);

    return this.http.get<Boolean>(reqUrl);
  }

  public update(obj:T):Observable<Boolean>{
    console.log("Update " + T.name);
    let parm:string = DataService.UPDATE;
    let reqUrl:string = this.baseUrl + parm;
    console.log(obj);

    return this.http.put<Boolean>(reqUrl, obj);
  }

}
