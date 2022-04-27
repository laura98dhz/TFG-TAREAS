import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasTerminadasComponent } from './tareas-terminadas.component';

describe('TareasTerminadasComponent', () => {
  let component: TareasTerminadasComponent;
  let fixture: ComponentFixture<TareasTerminadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasTerminadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasTerminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
