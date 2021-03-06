import { UserServicesService } from './../services/user-services.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
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

  eliminarCursos(id: string) {
    this._registroService.eliminarCursos(id).then(() => {
      console.log('curso eliminado');
    }).catch(error => {
      console.error(error);
    })
  }

  eliminarCursos2(uid: string, id: string) {
    this._registroService.eliminarCursos2(uid,id).then(() => {
      console.log('curso eliminado');
    }).catch(error => {
      console.error(error);
    })
  }

}
