import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaEnProcesoItemComponent } from './tarea-en-proceso-item.component';

describe('TareaEnProcesoItemComponent', () => {
  let component: TareaEnProcesoItemComponent;
  let fixture: ComponentFixture<TareaEnProcesoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaEnProcesoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEnProcesoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
