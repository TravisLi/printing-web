import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';
import { ProductCategory } from '../../models/product-category';
import { ProductCategoryMaintenanceEditPage } from '../product-category-maintenance-edit/product-category-maintenance-edit';
import { ProductCategoryMaintenanceAddPage } from '../product-category-maintenance-add/product-category-maintenance-add';

/**
 * Generated class for the ProductCategoryMaintenanceSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-category-maintenance-select',
  templateUrl: 'product-category-maintenance-select.html',
})
export class ProductCategoryMaintenanceSelectPage {

  private nameToSearch:string;
  private productCategorys: Array<ProductCategory>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public productCategoryService: ProductCategoryService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCategoryMaintenanceSelectPage');
  }

  public search(): void {
    console.log('search products start')
    // if the value is an empty string don't filter the items
    if (this.nameToSearch && this.nameToSearch.trim() != '') {
      let pc:ProductCategory = new ProductCategory();
      pc.name = this.nameToSearch;
      this.productCategoryService.search(pc).subscribe(
        productCategorys => {
          
          console.log(productCategorys);

          this.productCategorys = productCategorys;

        }
      )
    }else{
      this.productCategorys = [];
    }
  }

  public update(productCategory:ProductCategory){
    console.log("update event catch");
    this.navCtrl.push(ProductCategoryMaintenanceEditPage, {productCategory: productCategory});
  }
  
  public add(){
    this.navCtrl.push(ProductCategoryMaintenanceAddPage);
  }

  public delete(productCat:ProductCategory){
    console.log("delete event catch");
    const prompt = this.alertCtrl.create({
      title: '刪除產品類型',
      message: "確定刪除產品類型?",
      buttons: [
        {
          text: '確定',
          handler: data => {
            console.log('Saved clicked');
            this.productCategoryService.delete(productCat._id).subscribe(resp=>{
              console.log(resp.status);
              if(resp.status===204){
                let toast = this.toastCtrl.create({
                  message: '產品類型已成功刪除',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
                this.search();
              }else{
                let toast = this.toastCtrl.create({
                  message: '產品類型刪除失敗',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
              }
            });
          }
        },
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
