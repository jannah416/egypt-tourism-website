import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoSharmComponent } from './go-sharm.component';

describe('GoSharmComponent', () => {
  let component: GoSharmComponent;
  let fixture: ComponentFixture<GoSharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoSharmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoSharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
