import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductCategory } from 

/**
 * Generated class for the ProductCategorySelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-category-selection',
  templateUrl: 'product-category-selection.html',
})
export class ProductCategorySelectionPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCategorySelectionPage');
  }

  public selectProductCategory(productCat:ProductCategory){
    this.navCtrl.push('ProductSelection',{
      productCategory: productCat
    });
  }

}
