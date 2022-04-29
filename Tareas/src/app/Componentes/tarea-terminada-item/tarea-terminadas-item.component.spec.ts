import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaTerminadasItemComponent } from './tarea-terminadas-item.component';

describe('TareaTerminadasItemComponent', () => {
  let component: TareaTerminadasItemComponent;
  let fixture: ComponentFixture<TareaTerminadasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaTerminadasItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaTerminadasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
