import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() { } 

  ngOnDestroy(){
  }
}

