import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../../models/material';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';

/*
  Generated class for the MaterialServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MaterialService {

  private materialUrl:string = ENV.restUrl + "/material";

  constructor(public http: HttpClient) {
    console.log('Hello MaterialServiceProvider Provider');
  }

  public getAllMaterial():Observable<Material[]> {
    let parm:string = `/all/get`;
    let reqUrl:string = this.materialUrl + parm;
    return this.http.get<Material[]>(reqUrl);
  }

  public searchMaterial(name:string):Observable<Material[]>{
    let parm:string = `/search/${name}`;
    let reqUrl:string = this.materialUrl + parm;
    console.log("Material Name = " + name);

    return this.http.get<Material[]>(reqUrl);
  }

  public addMaterial(material:Material):Observable<Boolean>{
    let parm:string = `/add`;
    let reqUrl:string = this.materialUrl + parm;
    console.log("Material Name = " + name);

    return this.http.post<Boolean>(reqUrl, material);
  }

  public delMaterial(id:number):Observable<Boolean>{
    let parm:string = `/del/${id}`;
    let reqUrl:string = this.materialUrl + parm;
    console.log("Prduct Cat Id = " + id);

    return this.http.get<Boolean>(reqUrl);
  }

  public updateMaterial(material:Material):Observable<Boolean>{
    let parm:string = `/update`;
    let reqUrl:string = this.materialUrl + parm;
    console.log(material);

    return this.http.put<Boolean>(reqUrl, material);
  }

}
