import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptDayToursComponent } from './egypt-day-tours.component';

describe('EgyptDayToursComponent', () => {
  let component: EgyptDayToursComponent;
  let fixture: ComponentFixture<EgyptDayToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgyptDayToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgyptDayToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
