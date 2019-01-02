import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-register',
  templateUrl: 'customer-register.html',
})
export class CustomerRegisterPage {

  @Input() email:string;
  @Input() username:string;
  @Input() password1:string;
  @Input() password2:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerRegisterPage');
  }

  public register():void{

  }

  public clearInput():void{
    this.email = "";
    this.username = "";
    this.password1 = "";
    this.password2 = "";
  }

}
