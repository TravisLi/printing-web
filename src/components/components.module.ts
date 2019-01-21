import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavBarComponent } from './nav-bar/nav-bar';
import { OrderBoxComponent } from './order-box/order-box';
import { ProductBoxComponent } from './product-box/product-box';
import { ProductCategoryBoxComponent } from './product-category-box/product-category-box';
import { ProductBoxEditComponent } from './product-box-edit/product-box-edit';
import { ProductBoxSelectComponent } from './product-box-select/product-box-select';
@NgModule({
	declarations: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent,
    ProductBoxEditComponent,
    ProductBoxSelectComponent],
	imports: [IonicModule],
	exports: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent,
    ProductBoxEditComponent,
    ProductBoxSelectComponent]
})
export class ComponentsModule {}
