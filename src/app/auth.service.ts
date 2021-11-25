import { AngularFirestore } from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })


export class AuthService {


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) { }


   login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).
      then(value => {
        console.log('Nice, it worked!');
        const uid = value.user?.uid;
        this.db.collection('users').doc(uid).ref.get().then(async (doc) => {
          if (doc.exists) {
            var data: any = doc.data();
            var nombre = data.nombre;
            var codigo = data.codigo;
            var email = data.email;
            var rol = data.rol;
            console.log("Nombre: " + nombre);
            console.log("Codigo: " + codigo);
            console.log("Email: " + email);
            if(rol == 0){
              this.router.navigateByUrl("/Registrar-Inscribir");
            }else if(rol == 1){
              this.router.navigateByUrl("/profile");
            }else if(rol == 2){
              this.router.navigateByUrl("/profileProfesor")
            }
          }
        });
  })
  .catch(err => {
    console.log('Something went wrong: ', err.message);
  });
}

emailSignup(email: string, password: string, codigo: string, nombre: string, rol: string) {
  this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Sucess', value);
      const uid = value.user?.uid;

      this.db.collection('users').doc(uid).set({
        codigo: codigo,
        nombre: nombre,
        email: email,
        rol: rol,
        uid: uid
      })
      this.router.navigateByUrl('/lista-cosas');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
}

registrarCursos(nombreCurso: string, profesor: string, codigo: number){
  this.afAuth.authState.subscribe(user =>{
    const uid = user?.uid;
    var UID = "codigo-" + Math.floor(Math.random() * 999999);
    this.db.collection('users').doc(uid).collection('1').doc(UID).set({
      nombreCurso : nombreCurso,
      codigo: codigo,
      profesor: profesor

    })
  })
}



getUserAuth(){
  return this.afAuth.authState
}

}

