import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BoxComponent } from './box/box';
import { BoxSelectComponent } from './box-select/box-select';
import { BoxEditComponent } from './box-edit/box-edit';
import { NavBarComponent } from './nav-bar/nav-bar';
import { OrderBoxComponent } from './order-box/order-box';
import { ProductBoxComponent } from './product-box/product-box';
import { ProductCategoryBoxComponent } from './product-category-box/product-category-box';
import { ProductBoxEditComponent } from './product-box-edit/product-box-edit';
import { ProductBoxSelectComponent } from './product-box-select/product-box-select';
import { ProductCategoryBoxEditComponent } from './product-category-box-edit/product-category-box-edit';
@NgModule({
	declarations: [
    BoxComponent,
    BoxEditComponent,
    BoxSelectComponent,
    NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent,
    ProductBoxEditComponent,
    ProductBoxSelectComponent,
    ProductCategoryBoxEditComponent],
	imports: [IonicModule],
	exports: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent,
    ProductBoxEditComponent,
    ProductBoxSelectComponent,
    ProductCategoryBoxEditComponent]
})
export class ComponentsModule {}
