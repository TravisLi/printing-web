import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { OrderItem } from '../../models/orderItem';
import { Product } from '../../models/product';
import { OrderService } from '../../providers/order-service/order-service';
import { ProductCategorySelectionPage } from '../product-category-selection/product-category-selection';

/**
 * Generated class for the OrderItemAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-item-add',
  templateUrl: 'order-item-add.html',
})
export class OrderItemAddPage {

  public orderItem:OrderItem;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl:ToastController,
    private alertCtrl:AlertController,
    private orderService: OrderService) {
    let product:Product = navParams.get('product');
    console.log(product);
    if(product){
      this.orderItem = new OrderItem();
      this.orderItem.product = product;
    }else{
      let toast = this.toastCtrl.create({
        message: '找不到產品',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderItemAddPage');
  }

  public confirm():void {
    this.orderService.addOrderItem(this.orderItem);
    const prompt = this.alertCtrl.create({
      title: '加入產品',
      message: "產品己加到購物車",
      buttons: [
        {
          text: '確定',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.setRoot(ProductCategorySelectionPage);
          }
        }
      ]
    });
    prompt.present();
  }

}
