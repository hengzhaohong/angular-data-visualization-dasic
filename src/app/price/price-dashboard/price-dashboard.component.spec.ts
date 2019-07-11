import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDashboardComponent } from './price-dashboard.component';

describe('PriceDashboardComponent', () => {
  let component: PriceDashboardComponent;
  let fixture: ComponentFixture<PriceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
