import { UserServicesService } from './../services/user-services.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  cursos: any[] = [];
  public email: any;

  constructor(public authService: AuthService, private _registroService: UserServicesService) { }

  ngOnInit(): void {
    this.authService.getUserAuth().subscribe(user => {
      this.email = user?.email;
     })
     this.getCursos()
  }

 // signOut(){
   // this.authService.logout();
 // }

  getCursos(){
    this._registroService.getCursos().subscribe(data =>{
      this.cursos = [];
      data.forEach((element: any) => {
        this.cursos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.cursos);
    });
  }

  eliminarCursos(id: string){
    this._registroService.eliminarCursos(id).then(() =>{
      console.log('curso eliminado');
    }).catch(error =>{
      console.error(error);
    })
  }

}
