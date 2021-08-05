import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu3',
  templateUrl: './main-menu3.component.html',
  styleUrls: ['./main-menu3.component.css']
})
export class MainMenu3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  changePage(event$): void {
    console.log('current page is ' + event$);
  }
}
