import { HomeComponent } from './home.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeCounterComponent } from './home-counter/home-counter.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeInfoBreakComponent } from './home-info-break/home-info-break.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeServicesComponent } from './home-services/home-services.component';




@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    HomeHeaderComponent,
    HomeContentComponent,
    HomeServicesComponent,
    HomeCounterComponent,
    HomeInfoBreakComponent,
    HomeTeamComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    NgbModule,
 
  ]
})
export class HomeModule { }
