import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesScrollComponent } from './home-services-scroll.component';

describe('HomeServicesScrollComponent', () => {
  let component: HomeServicesScrollComponent;
  let fixture: ComponentFixture<HomeServicesScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServicesScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeServicesScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
