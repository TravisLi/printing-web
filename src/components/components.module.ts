import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavBarComponent } from './nav-bar/nav-bar';
import { OrderBoxComponent } from './order-box/order-box';
import { ProductBoxComponent } from './product-box/product-box';
import { ProductCategoryBoxComponent } from './product-category-box/product-category-box';
@NgModule({
	declarations: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent],
	imports: [IonicModule],
	exports: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent]
})
export class ComponentsModule {}
