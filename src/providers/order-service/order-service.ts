import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/order';
import { OrderItem } from '../../models/orderItem';
import { Observable } from 'rxjs';
import { ENV } from '@app/env';
/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderService {

  private orderUrl:string = ENV.restUrl + "/order";
  private orderItems:OrderItem[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello OrderServiceProvider Provider');
  }

  public getOrder(custId:string):Observable<Order[]>{
    let parm:string = `/${custId}/`
    let reqUrl:string = this.orderUrl + parm
    return this.http.get<Order[]>(reqUrl);
  }

  public addOrderItem(orderItem:OrderItem):void{
    this.orderItems.push(orderItem);
  }

}
