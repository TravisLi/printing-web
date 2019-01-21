import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product-service/product-service';

/**
 * Generated class for the ProductMaintenanceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-maintenance-edit',
  templateUrl: 'product-maintenance-edit.html',
})
export class ProductMaintenanceEditPage {

  product:Product

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productService: ProductService
    ) {
      let product:Product = navParams.get('product');
      if(product){
        this.product = product;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductMaintenanceEditPage');
  }

  public cancel():void{
    this.navCtrl.pop();
  }

  public updateProduct():void{
    this.productService.updateProduct(this.product);
  }

}
