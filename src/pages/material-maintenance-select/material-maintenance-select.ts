import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { MaterialService } from '../../providers/material-service/material-service';
import { Material } from '../../models/material';
import { MaterialMaintenanceAddPage } from '../material-maintenance-add/material-maintenance-add';
import { MaterialMaintenanceEditPage } from '../material-maintenance-edit/material-maintenance-edit';
/**
 * Generated class for the MaterialMaintenanceSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-maintenance-select',
  templateUrl: 'material-maintenance-select.html',
})
export class MaterialMaintenanceSelectPage {

  private nameToSearch:string;
  private materials: Material[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public materialService: MaterialService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialMaintenanceSelectPage');
  }

  public search(): void {
    console.log('search materials start')
    // if the value is an empty string don't filter the items
    if (this.nameToSearch && this.nameToSearch.trim() != '') {
      this.materialService.search(this.nameToSearch).subscribe(
        materials => {
          this.materials = materials;
        }
      )
    }else{
      this.materials = [];
    }
  }

  public update(material:Material){
    this.navCtrl.push(MaterialMaintenanceEditPage, {material: material});
  }
  
  public add(){
    this.navCtrl.push(MaterialMaintenanceAddPage);
  }

  public delete(materialId:number){
    const prompt = this.alertCtrl.create({
      title: '刪除物料',
      message: "確定刪除物料?",
      buttons: [
        {
          text: '確定',
          handler: data => {
            console.log('Saved clicked');
            this.materialService.delete(materialId).subscribe(result=>{
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
                  message: '產品刪除物料',
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
