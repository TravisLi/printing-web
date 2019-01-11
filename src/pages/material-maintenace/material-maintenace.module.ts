import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialMaintenacePage } from './material-maintenace';

@NgModule({
  declarations: [
    MaterialMaintenacePage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialMaintenacePage),
  ],
})
export class MaterialMaintenacePageModule {}
