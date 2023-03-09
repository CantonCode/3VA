import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoBreakComponent } from './home-info-break.component';

describe('HomeInfoBreakComponent', () => {
  let component: HomeInfoBreakComponent;
  let fixture: ComponentFixture<HomeInfoBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInfoBreakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInfoBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
