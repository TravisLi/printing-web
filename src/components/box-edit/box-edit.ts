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
  protected deleteEvent = new EventEmitter<T>();

  @Output()
  protected updateEvent = new EventEmitter<T>();

  constructor() {
    super();
    console.log('Hello BoxEditComponent Component');
  }

  public delete():void{
    console.log('Emit delete event');
    this.deleteEvent.emit(this.content);
  }
  public update():void{
    console.log('Emit update event');
    this.updateEvent.emit(this.content);
  }

}
