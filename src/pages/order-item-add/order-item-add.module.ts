import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderItemAddPage } from './order-item-add';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrderItemAddPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderItemAddPage),
    ComponentsModule
  ],
})
export class OrderItemAddPageModule {}
