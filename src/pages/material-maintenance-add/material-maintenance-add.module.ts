import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { MaterialMaintenanceAddPage } from './material-maintenance-add';

@NgModule({
  declarations: [
    MaterialMaintenanceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialMaintenanceAddPage),
    ComponentsModule
  ],
})
export class MaterialMaintenanceAddPageModule {}
