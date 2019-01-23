import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { Material } from '../../models/material';
import { ProductCategory } from '../../models/product-category';
import { ProductService } from '../../providers/product-service/product-service';
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';
import { MaterialService } from '../../providers/material-service/material-service';
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

  private product:Product;
  private materials:Material[] = [];
  private productCategorys:ProductCategory[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productService: ProductService,
    public materialService: MaterialService,
    public productCategoryService: ProductCategoryService
    ) {
      this.product = new Product();
      this.product.material = new Material();
      this.product.productCategroy = new ProductCategory();
      this.materials=[];
      this.productCategorys=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductMaintenanceAddPage');
    this.materialService.getAllMaterial().subscribe(materials=>{
      if(materials){
        console.info("Material is found")
        this.materials = materials;
      }else{
        console.warn("No material is found")
      }
    })

    this.productCategoryService.getAllProductCat().subscribe(productCategorys=>{
      if(productCategorys){
        console.info("Product Category is found")
        this.productCategorys = productCategorys;
      }else{
        console.warn("No productCategory is found")
      }
    })
  }

  public compareFn(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  public cancel():void{
    this.navCtrl.pop();
  }

  public addProduct():void{
    console.log(this.product);
    this.productService.addProduct(this.product);
  }

}
