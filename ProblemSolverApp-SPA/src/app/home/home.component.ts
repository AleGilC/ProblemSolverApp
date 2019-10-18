import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../src/assets/css/floating-labels.css']
})
export class HomeComponent implements OnInit {
  title = 'app-SPA';
  constructor() { }

  ngOnInit() {
  }

}
