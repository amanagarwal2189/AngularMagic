import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cust-prop-bind',
  template: `
   {{result}}
  `,
  styles: []
})
export class CustPropBindComponent {
  integerq= 100;

  @Input() result: number = 0;


}
