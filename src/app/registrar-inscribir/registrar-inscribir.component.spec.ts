import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInscribirComponent } from './registrar-inscribir.component';

describe('RegistrarInscribirComponent', () => {
  let component: RegistrarInscribirComponent;
  let fixture: ComponentFixture<RegistrarInscribirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInscribirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
