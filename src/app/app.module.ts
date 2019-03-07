import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { ChangePasswordPageModule } from '../pages/change-password/change-password.module';
import { CustomerOrderPageModule } from '../pages/customer-order/customer-order.module';
import { CustomerRegisterPageModule } from '../pages/customer-register/customer-register.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MaterialMaintenanceAddPageModule } from '../pages/material-maintenance-add/material-maintenance-add.module';
import { MaterialMaintenanceEditPageModule } from '../pages/material-maintenance-edit/material-maintenance-edit.module';
import { MaterialMaintenanceSelectPageModule } from '../pages/material-maintenance-select/material-maintenance-select.module';
import { ProductCategoryMaintenanceAddPageModule } from '../pages/product-category-maintenance-add/product-category-maintenance-add.module';
import { ProductCategoryMaintenanceEditPageModule } from '../pages/product-category-maintenance-edit/product-category-maintenance-edit.module';
import { ProductCategoryMaintenanceSelectPageModule } from '../pages/product-category-maintenance-select/product-category-maintenance-select.module';
import { ProductCategorySelectionPageModule } from '../pages/product-category-selection/product-category-selection.module';
import { ProductMaintenanceAddPageModule } from '../pages/product-maintenance-add/product-maintenance-add.module';
import { ProductMaintenanceEditPageModule } from '../pages/product-maintenance-edit/product-maintenance-edit.module';
import { ProductMaintenanceSelectPageModule } from '../pages/product-maintenance-select/product-maintenance-select.module';
import { ProductSelectionPageModule } from '../pages/product-selection/product-selection.module';
import { AuthService } from '../providers/auth-service/auth-service';
import { CustomerService } from '../providers/customer-service/customer-service';
import { MaterialService } from '../providers/material-service/material-service';
import { OrderService } from '../providers/order-service/order-service';
import { ProductCategoryService } from '../providers/product-category-service/product-category-service';
import { ProductService } from '../providers/product-service/product-service';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{backButtonText:'',}),
    HttpClientModule,
    HttpModule,
    ComponentsModule,
    LoginPageModule,
    ChangePasswordPageModule,
    CustomerRegisterPageModule,
    CustomerOrderPageModule,
    MaterialMaintenanceAddPageModule,
    MaterialMaintenanceEditPageModule,
    MaterialMaintenanceSelectPageModule,
    ProductCategorySelectionPageModule,
    ProductSelectionPageModule,
    ProductMaintenanceAddPageModule,
    ProductMaintenanceEditPageModule,
    ProductMaintenanceSelectPageModule,
    ProductCategoryMaintenanceAddPageModule,
    ProductCategoryMaintenanceEditPageModule,
    ProductCategoryMaintenanceSelectPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    CustomerService,
    OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService,
    ProductCategoryService,
    MaterialService,
  ]
})
export class AppModule {}
