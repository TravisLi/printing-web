import { Component, Input } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ProductCategorySelectionPage } from '../product-category-selection/product-category-selection';
import { CustomerRegisterPage } from '../customer-register/customer-register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @Input() username:string;
  @Input() password:string;

  constructor(private navCtrl: NavController, 
    private loadCtrl:LoadingController, 
    private toastCtrl:ToastController, 
    private authService:AuthService ) {
    this.username = "";
    this.password = "";
  }

  public clearInput():void{
    this.username = "";
    this.password = "";
  }

  public newUser():void{
    this.navCtrl.push(CustomerRegisterPage);
  }

  public login():void{
    
    let loading = this.loadCtrl.create({
      content: "loading"
    })
    loading.present()
    
    this.authService.login(this.username, this.password).subscribe(user=>{
      loading.dismiss();
      if(user){
        this.authService.setUser(user);
        this.navCtrl.setRoot(ProductCategorySelectionPage);
      }else{
        let toast = this.toastCtrl.create({
          message: 'Wrong username and password',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }
    ,error=>{
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Server Error',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      console.log(error);
    })
  }

}
