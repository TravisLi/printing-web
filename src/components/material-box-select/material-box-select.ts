import { Component } from '@angular/core';
import { BoxSelectComponent } from '../../components/box-select/box-select';
import { Material } from '../../models/material'

/**
 * Generated class for the MaterialBoxSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'material-box-select',
  templateUrl: 'material-box-select.html'
})
export class MaterialBoxSelectComponent extends BoxSelectComponent<Material> {

  constructor() {
    super();
    console.log('Hello MaterialBoxSelectComponent Component');
  }

}
