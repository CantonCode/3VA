import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-counter',
  templateUrl: './home-counter.component.html',
  styleUrls: ['./home-counter.component.scss']
})
export class HomeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    { 
     img:"assets/images/agency/counter/1.png",
     count: 275,
     text: 'Days Worked'
    },
    { 
      img:"assets/images/agency/counter/2.png",
      count: 12,
      text: 'Project Finished'
     },
     { 
      img:"assets/images/agency/counter/3.png",
      count: 600000,
      text: 'Coffees Drank'
     },
     
    
  ]
}
