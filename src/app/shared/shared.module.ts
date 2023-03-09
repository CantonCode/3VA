import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MenuComponent } from './components/navigation/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CenterMenuComponent } from './components/navigation/center-menu/center-menu.component';


@NgModule({
  declarations: [CenterMenuComponent,LoaderComponent],
  exports:[
    CenterMenuComponent,
    LoaderComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    //ToastrModule.forRoot()
  ]
})
export class SharedModule { }
