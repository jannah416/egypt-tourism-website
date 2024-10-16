import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLuxorComponent } from './go-luxor.component';

describe('GoLuxorComponent', () => {
  let component: GoLuxorComponent;
  let fixture: ComponentFixture<GoLuxorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoLuxorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoLuxorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
