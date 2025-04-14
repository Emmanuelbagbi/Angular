import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorCollectionComponent } from './indoor-collection.component';

describe('IndoorCollectionComponent', () => {
  let component: IndoorCollectionComponent;
  let fixture: ComponentFixture<IndoorCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
