import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaQueHacerItemComponent } from './tarea-que-hacer-item.component';

describe('TareaQueHacerItemComponent', () => {
  let component: TareaQueHacerItemComponent;
  let fixture: ComponentFixture<TareaQueHacerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaQueHacerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaQueHacerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
