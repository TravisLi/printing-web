import { BoxEditComponent } from '../../components/box-edit/box-edit';
import { Component } from '@angular/core';
import { Material } from '../../models/material';

/**
 * Generated class for the MaterialBoxEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'material-box-edit',
  templateUrl: 'material-box-edit.html'
})
export class MaterialBoxEditComponent extends BoxEditComponent<Material> {

  constructor() {
    super();
    console.log('Hello MaterialBoxEditComponent Component');
  }

}
