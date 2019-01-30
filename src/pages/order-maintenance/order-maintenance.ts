import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { OrderService } from '../../providers/order-service/order-service';

/**
 * Generated class for the OrderMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-maintenance',
  templateUrl: 'order-maintenance.html',
})
export class OrderMaintenancePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public orderService: OrderService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderMaintenancePage');
  }

}
