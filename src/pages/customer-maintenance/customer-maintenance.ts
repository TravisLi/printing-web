import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the CustomerMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-maintenance',
  templateUrl: 'customer-maintenance.html',
})
export class CustomerMaintenancePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerMaintenancePage');
  }

}
