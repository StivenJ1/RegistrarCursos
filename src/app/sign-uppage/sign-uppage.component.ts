import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-uppage.component.html',
  styleUrls: ['./sign-uppage.component.css']
})
export class SignupComponent implements OnInit {
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
