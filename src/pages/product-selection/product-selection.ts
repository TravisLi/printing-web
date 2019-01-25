import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    private authService: AuthService,
    private toastCtrl:ToastController,
    private productService: ProductService) {
      let productCat:ProductCategory = navParams.get('productCat');
      this.productService.getByProductCatId(productCat.id).subscribe(products=>{
        if(products){
          this.products = products;
        }else{
          let toast = this.toastCtrl.create({
            message: '找不到產品',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
        },error=>{
          let toast = this.toastCtrl.create({
            message: '伺服器錯誤',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        })
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductSelectionPage');
  }

  public selectProduct(product:Product){
    this.navCtrl.push('OrderItemAddPage',{
      product: product
    });
  }

}
