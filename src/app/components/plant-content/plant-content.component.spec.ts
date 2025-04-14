import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantContentComponent } from './plant-content.component';

describe('PlantContentComponent', () => {
  let component: PlantContentComponent;
  let fixture: ComponentFixture<PlantContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
