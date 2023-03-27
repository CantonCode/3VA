import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColorScssService } from '../../shared/service/color-scss.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(public colorPicker: ColorScssService,) { }

  ngOnInit() { 
    this.colorPicker.setColorScheme('color-2');
  } 

  ngOnDestroy(){
  }
}
