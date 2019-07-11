import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStatusDashboardComponent } from './data-status-dashboard.component';

describe('DataStatusDashboardComponent', () => {
  let component: DataStatusDashboardComponent;
  let fixture: ComponentFixture<DataStatusDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStatusDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStatusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
