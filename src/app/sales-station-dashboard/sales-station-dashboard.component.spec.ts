import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStationDashboardComponent } from './sales-station-dashboard.component';

describe('SalesStationDashboardComponent', () => {
  let component: SalesStationDashboardComponent;
  let fixture: ComponentFixture<SalesStationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesStationDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesStationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
