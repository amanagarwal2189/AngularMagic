import { Component } from '@angular/core';
import { Comp1Component, Comp2Component } from './comp1';
import { DbcomComponent } from './dbcom';
import { EventbinderComponent } from './eventbinder';

@Component({
  moduleId: module.id,
  selector: 'app-root',
/**  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: `
  <h1>Root component</h1>
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
  <app-dbcom>

  </app-dbcom>

  <app-eventbinder>
  </app-eventbinder>
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
