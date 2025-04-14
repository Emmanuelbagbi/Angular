import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityPlantsComponent } from './quality-plants.component';

describe('QualityPlantsComponent', () => {
  let component: QualityPlantsComponent;
  let fixture: ComponentFixture<QualityPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityPlantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
