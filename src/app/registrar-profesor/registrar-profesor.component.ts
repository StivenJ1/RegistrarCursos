import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.css']
})
export class RegistrarProfesorComponent implements OnInit {


  public email: any;
  public codigo: any;
  public password: any;
  public nombre: any;
  public rol: any;

  constructor(public authService: AuthService) { }

  ngOnInit() { }

  onSubmit(formData: { valid: any; value: { email: string; password: string; codigo: string; nombre: string; rol: string; }; }): void {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password,
        formData.value.codigo,
        formData.value.nombre,
        formData.value.rol
      );
    }


  }
}
