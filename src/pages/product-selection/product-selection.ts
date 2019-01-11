import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ProductService } from '../../providers/product-service/product-service';
import { Product } from '../../models/product';
import { ProductCategory } from '../../models/product-category';

/**
 * Generated class for the ProductSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-selection',
  templateUrl: 'product-selection.html',
})
export class ProductSelectionPage {

  public products:Product[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public productService: ProductService) {
      let productCat:ProductCategory = navParams.get('productCat');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductSelectionPage');
  }

}
