import { Component, EventEmitter, Output } from '@angular/core';
import { BoxComponent } from '../../components/box/box';

/**
 * Generated class for the BoxEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'box-edit',
  templateUrl: 'box-edit.html'
})
export class BoxEditComponent<T> extends BoxComponent<T> {

  @Output()
  private delEvent = new EventEmitter<T>();

  @Output()
  private updateEvent = new EventEmitter<T>();

  constructor() {
    super();
    console.log('Hello BoxEditComponent Component');
  }

  public delete():void{
    this.delEvent.emit(this.content);
  }
  public update():void{
    this.updateEvent.emit(this.content);
  }

}
