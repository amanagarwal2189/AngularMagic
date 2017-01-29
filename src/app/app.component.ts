import { Component } from '@angular/core';
import { Comp1Component, Comp2Component } from './comp1';

@Component({
  moduleId: module.id,
  selector: 'app-root',
/**  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: `
  <h1>Inline Template</h1>
  <app-comp1></app-comp1>
  <app-comp2>
      <div>
          <h1>Hello there</h1>
          <p> You got it </p>
      </div>
  </app-comp2>
  <app-comp2>
      <div>
          <h1>Yet another comp</h1>
          <p> You got it here too!! </p>
      </div>
  </app-comp2>
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
