import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cust-event',
  template: `
  	<button (click) = "onCustClicked()"> Custom Click Me!! </button>
  `,
  styles: []
})
export class CustEventComponent {

	a=100;
  @Output() clicked = new EventEmitter<string>();
  onCustClicked(){
    this.clicked.emit("Custom button clicked");
  }

}
