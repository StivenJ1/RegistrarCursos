import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCursosComponent } from './registrar-cursos.component';

describe('RegistrarCursosComponent', () => {
  let component: RegistrarCursosComponent;
  let fixture: ComponentFixture<RegistrarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
