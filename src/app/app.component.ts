import { Component } from '@angular/core';

@Component({
moduleId:module.id,
  selector: 'app-root',
/**  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: `
  <h1>Inline Template</h1>
  <p> Another Line</p>
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
