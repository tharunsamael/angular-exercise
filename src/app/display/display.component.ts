import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Ex.name';
  roll = 1234567;
  Year = 1;
  dept = "ECE";
  sec = "A";
  email = "example@rajalakshmi.edu.in";

}
