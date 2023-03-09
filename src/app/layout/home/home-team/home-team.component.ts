import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.scss']
})
export class HomeTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  experts = [
    { 
     img:"assets/images/team-conor.jpg",
     name:"Conor Canton",
     designation:"Software Developer"
    },
    { 
      img:"assets/images/team-matthew.jpg",
      name:"Matthew Cunnane",
      designation:"UX/Design Specilist"
     },
     { 
      img:"assets/images/event/l3-4.png",
      name:"Rory Man",
      designation:"AI Specilist"
     },
  ]
  
  speakerCarouselOptions: OwlOptions = {
    items: 3,
    margin: 55,
    nav: false,
    dots: false,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        360: {
            items: 2,
            margin: 10
        },
        480: {
            items: 3,
            margin: 10
        },
        767: {
            items: 2,
            margin: 10
        },
        991: {
            items: 3,
            margin: 10
        }
    }
  }
}
