import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product-service/product-service';
/**
 * Generated class for the ProductMaintenanceAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-maintenance-add',
  templateUrl: 'product-maintenance-add.html',
})
export class ProductMaintenanceAddPage {

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
    console.log('ionViewDidLoad ProductMaintenanceAddPage');
  }

  public cancel():void{
    this.navCtrl.pop();
  }

  public addProduct():void{
    this.productService.addProduct(this.product);
  }

}
