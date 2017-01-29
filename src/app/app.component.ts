import { Component } from '@angular/core';
import { Comp1Component } from './comp1';

@Component({
  moduleId: module.id,
  selector: 'app-root',
/**  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: `
  <h1>Inline Template</h1>
  <app-comp1></app-comp1>
  `,
  styles:[`
  	h1{
  		color: red;
  	}
  `]
})
export class AppComponent {
  title = 'The app is up and running!';
}
