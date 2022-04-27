import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasEnProcesoComponent } from './tareas-en-proceso.component';

describe('TareasEnProcesoComponent', () => {
  let component: TareasEnProcesoComponent;
  let fixture: ComponentFixture<TareasEnProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasEnProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasEnProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
