import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { MaterialMaintenanceSelectPage } from './material-maintenance-select';

@NgModule({
  declarations: [
    MaterialMaintenanceSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialMaintenanceSelectPage),
    ComponentsModule
  ],
})
export class MaterialMaintenanceSelectPageModule {}
