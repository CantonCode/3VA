import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services-scroll',
  templateUrl: './home-services-scroll.component.html',
  styleUrls: ['./home-services-scroll.component.scss']
})
export class HomeServicesScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pricing = [
    { 
      icon:"rocket-ship",
      package:"Technical",
      feature1:"Full-Stack Design & Development",
      feature2:"Backend Integration",
      feature3:"Artifical Intelligence",
      feature4:"",
      price:"0",
      btn:"purchase"
    },
    {
      icon:"diamond",
      package:"Get Live",
      feature1:"Hosting & Domain assistance",
      feature2:"SSL Certification",
      feature3:"Secure & Reliable",
      feature4:"",
      price:"49",
      btn:"purchase"
    },
    {
      icon:"pie-chart",
      package:"Get Setup",
      feature1:"UX/UI Design",
      feature2:"Customer & Business Research",
      feature3:"Planning",
      feature4:"",
      price:"99",
      btn:"purchase"
    }
  ]
  
  pricingcarouselOptions= {
        items: 3,
        height:300,
        margin: 30,
        nav: false,
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items:2,
                margin: 15
            },
            992: {
                items:3,
                margin: 15
            },
            1000: {
                items: 3
            }
        }
  }

}