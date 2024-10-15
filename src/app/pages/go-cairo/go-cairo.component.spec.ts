import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCairoComponent } from './go-cairo.component';

describe('GoCairoComponent', () => {
  let component: GoCairoComponent;
  let fixture: ComponentFixture<GoCairoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoCairoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoCairoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
