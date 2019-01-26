import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BoxComponent } from './box/box';
import { BoxSelectComponent } from './box-select/box-select';
import { BoxEditComponent } from './box-edit/box-edit';
import { NavBarComponent } from './nav-bar/nav-bar';
import { OrderBoxComponent } from './order-box/order-box';
import { ProductBoxComponent } from './product-box/product-box';
import { ProductCategoryBoxComponent } from './product-category-box/product-category-box';
import { ProductCategoryBoxEditComponent } from './product-category-box-edit/product-category-box-edit';
import { ProductCategoryBoxSelectComponent } from './product-category-box-select/product-category-box-select';
import { ProductBoxEditComponent } from './product-box-edit/product-box-edit';
import { ProductBoxSelectComponent } from './product-box-select/product-box-select';
import { MaterialBoxComponent } from './material-box/material-box';
import { MaterialBoxSelectComponent } from './material-box-select/material-box-select';
import { MaterialBoxEditComponent } from './material-box-edit/material-box-edit';
@NgModule({
	declarations: [
    BoxComponent,
    BoxEditComponent,
    BoxSelectComponent,
    NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductCategoryBoxComponent,
    ProductCategoryBoxEditComponent,
    ProductCategoryBoxSelectComponent,
    ProductBoxEditComponent,
    ProductBoxSelectComponent,
    MaterialBoxComponent,
    MaterialBoxSelectComponent,
    MaterialBoxEditComponent],
	imports: [IonicModule],
	exports: [NavBarComponent,
    OrderBoxComponent,
    ProductBoxComponent,
    ProductBoxEditComponent,
    ProductBoxSelectComponent,
    ProductCategoryBoxComponent,
    ProductCategoryBoxEditComponent,
    ProductCategoryBoxSelectComponent,
    MaterialBoxComponent,
    MaterialBoxSelectComponent,
    MaterialBoxEditComponent]
})
export class ComponentsModule {}
