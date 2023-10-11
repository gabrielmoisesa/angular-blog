import { Component } from '@angular/core';
import data from 'src/app/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data = data;
}
