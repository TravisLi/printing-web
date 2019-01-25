import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data-service';
import { Material } from '../../models/material';
import { Observable } from 'rxjs';


/*
  Generated class for the MaterialServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MaterialService extends DataService<Material> {

  constructor(public http: HttpClient) {
    super("/material", http);
    console.log('Hello MaterialServiceProvider Provider');
  }

}
