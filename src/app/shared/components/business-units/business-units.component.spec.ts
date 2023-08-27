import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitsComponent } from './business-units.component';

describe('BusinessUnitsComponent', () => {
  let component: BusinessUnitsComponent;
  let fixture: ComponentFixture<BusinessUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
