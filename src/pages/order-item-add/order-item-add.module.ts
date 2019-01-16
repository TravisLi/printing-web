import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderItemAddPage } from './order-item-add';

@NgModule({
  declarations: [
    OrderItemAddPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderItemAddPage),
  ],
})
export class OrderItemAddPageModule {}
