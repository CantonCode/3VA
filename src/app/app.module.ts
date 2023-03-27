import { HomeModule } from './layout/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './layout/home/home.component';
import { HomeNavComponent } from './layout/home/home-nav/home-nav.component';
import { HomeHeaderComponent } from './layout/home/home-header/home-header.component';
import { HomeContentComponent } from './layout/home/home-content/home-content.component';
import { HomeServicesComponent } from './layout/home/home-services/home-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeCounterComponent } from './layout/home/home-counter/home-counter.component';
import { HomeInfoBreakComponent } from './layout/home/home-info-break/home-info-break.component';
import { HomeTeamComponent } from './layout/home/home-team/home-team.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeFooterComponent } from './layout/home/home-footer/home-footer.component';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
