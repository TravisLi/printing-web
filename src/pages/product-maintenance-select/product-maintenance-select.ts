import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from '../../models/product';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ProductService } from '../../providers/product-service/product-service';
import { ProductMaintenanceAddPage } from '../product-maintenance-add/product-maintenance-add';
import { ProductMaintenanceEditPage } from '../product-maintenance-edit/product-maintenance-edit';


/**
 * Generated class for the ProductMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-maintenance-select',
  templateUrl: 'product-maintenance-select.html',
})
export class ProductMaintenanceSelectPage {

  private nameToSearch:string;
  private products: Array<Product>;

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

  public search(): void {
    console.log('search products start')
    // if the value is an empty string don't filter the items
    if (this.nameToSearch && this.nameToSearch.trim() != '') {
      this.productService.search(this.nameToSearch).subscribe(
        products => {
          this.products = products;
          products.forEach(p=>{
            console.log(p);
          })
        }
      )
    }else{
      this.products = [];
    }
  }

  public update(product:Product){
    this.navCtrl.push(ProductMaintenanceEditPage, {product: product});
  }
  
  public add(){
    this.navCtrl.push(ProductMaintenanceAddPage);
  }

  public delete(productId:number){
    const prompt = this.alertCtrl.create({
      title: '刪除產品',
      message: "確定刪除產品?",
      buttons: [
        {
          text: '確定',
          handler: data => {
            console.log('Saved clicked');
            this.productService.delete(productId).subscribe(result=>{
              if(result){
                let toast = this.toastCtrl.create({
                  message: '產品已成功刪除',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
                this.search();
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
