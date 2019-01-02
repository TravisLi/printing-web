import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductMaintenancePage');
  }

}
