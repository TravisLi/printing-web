import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ProductSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-selection',
  templateUrl: 'product-selection.html',
})
export class ProductSelectionPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductSelectionPage');
  }

}
