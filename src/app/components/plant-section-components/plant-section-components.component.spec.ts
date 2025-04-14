import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSectionComponentsComponent } from './plant-section-components.component';

describe('PlantSectionComponentsComponent', () => {
  let component: PlantSectionComponentsComponent;
  let fixture: ComponentFixture<PlantSectionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantSectionComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantSectionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
