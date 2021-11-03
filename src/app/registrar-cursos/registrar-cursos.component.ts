import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from './../services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cursos',
  templateUrl: './registrar-cursos.component.html',
  styleUrls: ['./registrar-cursos.component.css']
})
export class RegistrarCursosComponent implements OnInit {

  registrarCurso: FormGroup;
  submitted = false;
  id: string | null;
  titulo = 'Agregar Curso';
  botonText = 'Agregar';

  constructor(private fb: FormBuilder, private registrarService: UserServicesService, private router: Router, private aRoute: ActivatedRoute) {
    this.registrarCurso = this.fb.group({
      curso: ['', Validators.required],
      codigo: ['', Validators.required],
      profesor: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    if(this.id !== null){
      this.esCurso();
    }

  }

  RegistrarCursos() {
    this.titulo= 'Agregar Curso'
    this.botonText= 'Agregar'
    const curso: any = {
      curso: this.registrarCurso.value.curso,
      codigo: this.registrarCurso.value.codigo,
      profesor: this.registrarCurso.value.profesor,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.registrarService.registrarCurso(curso).then(() => {
      console.log('curso registrado');
      this.router.navigate(['/profile']);
    }).catch(error => {
      console.log(error);
    })
  }

  registrarEditarCurso() {
    this.submitted = true;
    if (this.registrarCurso.invalid) {
      return;
    }
    if (this.id == null) {
      this.RegistrarCursos();
    } else {
      this.editarCurso(this.id);
    }
  }

  esCurso() {
    this.titulo = 'Editar Curso'
    this.botonText= 'Editar'
    if (this.id !== null) {
      this.registrarService.getCurso(this.id).subscribe(data => {
        console.log(data.payload.data()['curso']);
        this.registrarCurso.setValue({
          curso: data.payload.data()['curso'],
          codigo: data.payload.data()['codigo'],
          profesor: data.payload.data()['profesor']
        })
      })
    }
  }


  editarCurso(id: string){

    const curso: any = {
      curso: this.registrarCurso.value.curso,
      codigo: this.registrarCurso.value.codigo,
      profesor: this.registrarCurso.value.profesor,
      fechaActualizacion: new Date()
    }
    this.registrarService.updateCurso(id, curso).then(() => {
      console.log('curso actualizado');
      this.router.navigate(['/profile']);
    })
  }
}
