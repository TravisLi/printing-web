import { Component } from '@angular/core';
import { BoxComponent } from '../../components/box/box';
import { Material } from  '../../models/material';

/**
 * Generated class for the MaterialBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'material-box',
  templateUrl: 'material-box.html'
})
export class MaterialBoxComponent extends BoxComponent<Material>{

  constructor() {
    super()
    console.log('Hello MaterialBoxComponent Component');
  }

}
