import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { Material } from '../../models/material';
import { ProductCategory } from '../../models/product-category';
import { ProductService } from '../../providers/product-service/product-service';
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';
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

  private product:Product
  private materials:Material[];
  private productCategorys:ProductCategory[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productService: ProductService
    ) {
      this.product = new Product();
      this.product.name = "";
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
