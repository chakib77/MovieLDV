import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsVenirComponent } from './films-venir.component';

describe('FilmsVenirComponent', () => {
  let component: FilmsVenirComponent;
  let fixture: ComponentFixture<FilmsVenirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsVenirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsVenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
