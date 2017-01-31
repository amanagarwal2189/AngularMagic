import { Component } from '@angular/core';

@Component({
  selector: 'app-dbcom',
  templateUrl: './dbcom.component.html',
  styleUrls: ['./dbcom.component.css']
})
export class DbcomComponent {
	stringInterpolation = "Trying string interpolation";
	numInterpolation = 2;

	onTest(){
		return true;
	}


}

