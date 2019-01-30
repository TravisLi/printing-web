import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Material } from 'models/material';
import { ProductCategory } from '../../models/product-category';
import { MaterialService } from '../../providers/material-service/material-service';
import { ProductCategoryService } from '../../providers/product-category-service/product-category-service';
import { CommonFunction } from '../../utils/common-function';

/**
 * Generated class for the MaterialMaintenanceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-maintenance-edit',
  templateUrl: 'material-maintenance-edit.html',
})
export class MaterialMaintenanceEditPage {

  public material:Material;
  private productCategorys:ProductCategory[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public materialService: MaterialService,
    public productCategoryService: ProductCategoryService) {

      let material:Material = navParams.get('material');
      if(material){
        this.material = material;
      }

      this.productCategoryService.getAll().subscribe(productCategorys=>{
        if(productCategorys){
          console.info("Product Category is found")
          this.productCategorys = productCategorys;
        }else{
          console.warn("No productCategory is found")
        }
      })

  }

  public compare(o1: any, o2: any){
    return CommonFunction.compareFunction(o1,o2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialMaintenanceEditPage');
  }

  public cancel():void{
    this.navCtrl.pop();
  }

  public update():void{
    this.materialService.update(this.material);
  }

}
