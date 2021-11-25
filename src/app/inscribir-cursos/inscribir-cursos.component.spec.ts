import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirCursosComponent } from './inscribir-cursos.component';

describe('InscribirCursosComponent', () => {
  let component: InscribirCursosComponent;
  let fixture: ComponentFixture<InscribirCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
