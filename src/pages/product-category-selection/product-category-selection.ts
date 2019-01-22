import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { ProductCategory } from '../../models/product-category'
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';

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

  public productCategorys:ProductCategory[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private platform: Platform,
    private toastCtrl:ToastController,
    private productCatService: ProductCategoryService) {
      this.productCatService.getAllProductCat().subscribe(productCategorys=>{
        if(productCategorys){
          this.productCategorys = productCategorys;
        }else{
          let toast = this.toastCtrl.create({
            message: '找不到產品目錄',
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
    console.log('ionViewDidLoad ProductCategorySelectionPage');
  }

  public selectProductCategory(productCat:ProductCategory){
    this.navCtrl.push('ProductSelectionPage',{
      productCat: productCat
    });
  }

}
