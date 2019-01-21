import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ProductService } from '../../providers/product-service/product-service';
import { Product } from '../../models/product';
import { ProductMaintenanceEditPage } from '../../pages/product-maintenance-edit/product-maintenance-edit';
import { ProductMaintenanceAddPage } from '../../pages/product-maintenance-add/product-maintenance-add';


/**
 * Generated class for the ProductMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-maintenance',
  templateUrl: 'product-maintenance.html',
})
export class ProductMaintenancePage {

  private nameToSearch:string;
  private products: Product[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public productService: ProductService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductMaintenancePage');
  }

  public searchProducts(): void {
    console.log('search products start')
    // if the value is an empty string don't filter the items
    if (this.nameToSearch && this.nameToSearch.trim() != '') {
      this.productService.searchProduct(this.nameToSearch).subscribe(
        products => {
          this.products = products;
        }
      )
    }else{
      this.products = [];
    }
  }

  public updateProduct(product:Product){
    this.navCtrl.push(ProductMaintenanceEditPage, {product: product});
  }
  
  public addProduct(){
    this.navCtrl.push(ProductMaintenanceAddPage);
  }

  public delProduct(productId:number){
    const prompt = this.alertCtrl.create({
      title: '刪除產品',
      message: "確定刪除產品?",
      buttons: [
        {
          text: '確定',
          handler: data => {
            console.log('Saved clicked');
            this.productService.delProduct(productId).subscribe(result=>{
              if(result){
                let toast = this.toastCtrl.create({
                  message: '產品已成功刪除',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
                this.searchProducts();
              }{
                let toast = this.toastCtrl.create({
                  message: '產品刪除失敗',
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
