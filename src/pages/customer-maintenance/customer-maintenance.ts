import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Customer } from '../../models/customer';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CustomerService } from '../../providers/customer-service/customer-service';

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

  private customers:Customer[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerMaintenancePage');
  }

}
