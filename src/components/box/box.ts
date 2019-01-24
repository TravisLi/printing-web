import { Component,Input } from '@angular/core';

/**
 * Generated class for the BoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'box',
  templateUrl: 'box.html'
})
export class BoxComponent<T> {

  @Input()
  protected content: T;

  constructor() {
    console.log('Hello BoxComponent Component');
  }

}
