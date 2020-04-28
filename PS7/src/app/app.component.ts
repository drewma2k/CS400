import { Component } from '@angular/core';
import { DATA } from './DATA-MOCK';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  sightings = DATA;
}
