import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { MaterialMaintenanceEditPage } from './material-maintenance-edit';

@NgModule({
  declarations: [
    MaterialMaintenanceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialMaintenanceEditPage),
    ComponentsModule
  ],
})
export class MaterialMaintenanceEditPageModule {}
