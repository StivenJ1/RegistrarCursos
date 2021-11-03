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
    return this.firestore.collection('cursos', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarCursos(id: string): Promise<any>{
    return this.firestore.collection('cursos').doc(id).delete();
  }

  getCurso(id: string): Observable<any> {
    return this.firestore.collection('cursos').doc(id).snapshotChanges();
  }

  updateCurso(id: string, data: any): Promise<any> {
    return this.firestore.collection('cursos').doc(id).update(data);
  }
}
