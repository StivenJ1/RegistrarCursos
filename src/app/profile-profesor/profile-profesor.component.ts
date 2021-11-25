import { Component, OnInit } from '@angular/core';
import { UserServicesService } from './../services/user-services.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-profile-profesor',
  templateUrl: './profile-profesor.component.html',
  styleUrls: ['./profile-profesor.component.css']
})
export class ProfileProfesorComponent implements OnInit {
  estudiantes: any[] = [];
  public x: any;
  cursos: any[] = [];
  public nombre: any;
  public usuario: any;

  constructor(public authService: AuthService, private _registroService: UserServicesService) { }

  ngOnInit(): void {
    this.authService.getUserAuth().subscribe(user => {
      this.x = user?.uid;
    })
    this.getCursos()
  }

  // signOut(){
  // this.authService.logout();
  // }

  getCursos() {
    this._registroService.getCursos().subscribe(data => {
      this.estudiantes = [];
      data.forEach((element: any) => {
        this.estudiantes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      for (let index = 0; index < this.estudiantes.length; index++) {
        if (this.estudiantes[index].uid == this.x) {
          console.log("si");
          this.usuario = this.estudiantes[index];
          this.cursos[0] = this.estudiantes[index];
          this.nombre = this.estudiantes[index].nombre;
          this._registroService.getEstudiantes(this.x).subscribe(data => {
            this.cursos = [];
            data.forEach((element: any) => {
              this.cursos.push({
                id: element.payload.doc.id,
                ...element.payload.doc.data()
              })
            });
          });
        } else {
          console.log("No");

        }

      }

    });
  }




}

