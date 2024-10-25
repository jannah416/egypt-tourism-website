import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaParkTourComponent } from './aqua-park-tour.component';

describe('AquaParkTourComponent', () => {
  let component: AquaParkTourComponent;
  let fixture: ComponentFixture<AquaParkTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AquaParkTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquaParkTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
