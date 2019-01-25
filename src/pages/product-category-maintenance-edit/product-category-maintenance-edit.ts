import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductCategory } from '../../models/product-category';
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';

/**
 * Generated class for the ProductCategoryMaintenanceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-category-maintenance-edit',
  templateUrl: 'product-category-maintenance-edit.html',
})
export class ProductCategoryMaintenanceEditPage {

  private productCategory:ProductCategory

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productCategoryService: ProductCategoryService) {

      let productCategory:ProductCategory = navParams.get('productCategory');
      
      if(productCategory){
        this.productCategory = productCategory;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCategoryMaintenanceEditPage');
  }

  public cancel():void{
    this.navCtrl.pop();
  }

  public add():void{
    console.log(this.productCategory);
    this.productCategoryService.insert(this.productCategory);
  }

}
