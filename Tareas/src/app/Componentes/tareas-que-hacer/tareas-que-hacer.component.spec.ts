import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasQueHacerComponent } from './tareas-que-hacer.component';

describe('TareasQueHacerComponent', () => {
  let component: TareasQueHacerComponent;
  let fixture: ComponentFixture<TareasQueHacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasQueHacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasQueHacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
