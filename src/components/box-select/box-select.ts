import { Component, Output, EventEmitter } from '@angular/core';
import { BoxComponent } from '../../components/box/box';

/**
 * Generated class for the BoxSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'box-select',
  templateUrl: 'box-select.html'
})
export class BoxSelectComponent<T> extends BoxComponent<T>{

  @Output()
  selectEvent = new EventEmitter<T>();

  constructor() {
    super();
    console.log('Hello BoxSelectComponent Component');
  }

  public select():void{
    this.selectEvent.emit(this.content);
  }

}
