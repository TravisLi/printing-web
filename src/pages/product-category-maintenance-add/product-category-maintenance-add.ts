import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';
import { ProductCategory } from '../../models/product-category';

/**
 * Generated class for the ProductCategoryMaintenanceAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-category-maintenance-add',
  templateUrl: 'product-category-maintenance-add.html',
})
export class ProductCategoryMaintenanceAddPage {

  public productCategory:ProductCategory

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productCategoryService: ProductCategoryService) {
      this.productCategory = new ProductCategory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCategoryMaintenanceAddPage');
  }

  public cancel():void{
    this.navCtrl.pop();
  }

  public add():void{
    console.log(this.productCategory);
    this.productCategoryService.insert(this.productCategory);
  }

}
