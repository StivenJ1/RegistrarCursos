import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscribir-cursos',
  templateUrl: './inscribir-cursos.component.html',
  styleUrls: ['./inscribir-cursos.component.css']
})
export class InscribirCursosComponent implements OnInit {

  public nombreCurso: any;
  public profesor: any;
  public codigo: any;


  constructor(public authService: AuthService) { }

  ngOnInit() { }

  onSubmit(formData: { valid: any; value: { nombreCurso: string; profesor: string; codigo: number; }; }): void {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.registrarCursos(
        formData.value.nombreCurso,
        formData.value.profesor,
        formData.value.codigo
      );
    }
  }


}
