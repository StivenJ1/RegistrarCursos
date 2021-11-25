import { AngularFirestore } from '@angular/fire//compat/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private firestore: AngularFirestore) { }

  registrarCurso(curso: any): Promise<any>{
    return this.firestore.collection('cursos').add(curso);
  }

  getCursos(): Observable<any>{

    return this.firestore.collection('users').snapshotChanges();

  }

  getEstudiantes(uid: string): Observable<any>{
    return this.firestore.collection('users').doc(uid).collection("1").snapshotChanges();
  }


  eliminarCursos(id: string): Promise<any>{
    return this.firestore.collection('cursos').doc(id).delete();
  }

  eliminarCursos2(uid: string, id: string): Promise<any>{
    return this.firestore.collection('users').doc(uid).collection('1').doc(id).delete();
  }


  getCurso(id: string): Observable<any> {
    return this.firestore.collection('cursos').doc(id).snapshotChanges();
  }

  updateCurso(id: string, data: any): Promise<any> {
    return this.firestore.collection('cursos').doc(id).update(data);
  }

  getMaterias(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).collection("1").snapshotChanges();
  }

}
