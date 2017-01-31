import { Component } from '@angular/core';

@Component({
	  moduleId: module.id,
  selector: 'app-eventbinder',
  templateUrl: 'eventbinder.component.html',
  styleUrls: ['./eventbinder.component.css']
})
export class EventbinderComponent{

	onClicked(){
		alert("Raising that the button was clicked");
	}
}
