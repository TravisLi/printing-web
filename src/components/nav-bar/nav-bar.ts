import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the NavBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent {

  @Input()
  public title:string;

  constructor(
    public navCtrl: NavController,
    private authService:AuthService) {
    this.title = '';
  }

  public logout():void{
    this.authService.logout().subscribe(result=>{
      if(result){
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }

}
