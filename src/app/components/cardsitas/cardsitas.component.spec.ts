import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsitasComponent } from './cardsitas.component';

describe('CardsitasComponent', () => {
  let component: CardsitasComponent;
  let fixture: ComponentFixture<CardsitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
