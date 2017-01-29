import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article{
        color: red;
        border: 2px solid black;
    }
  `]
})
export class Comp2Component {

}
