import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSectionCardComponent } from './two-section-card.component';

describe('TwoSectionCardComponent', () => {
  let component: TwoSectionCardComponent;
  let fixture: ComponentFixture<TwoSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoSectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
