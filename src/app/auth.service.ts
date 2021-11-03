import { AngularFirestore } from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})


export class AuthService {


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) {}


login(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password).
  then(value => {
    console.log('Nice, it worked!');
    this.router.navigateByUrl('/Registrar-Inscribir');
  })
  .catch(err => {
    console.log('Something went wrong: ',err.message);
  });
}

emailSignup(email: string, password: string, codigo: string, nombre: string) {
  this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Sucess', value);
      const uid = value.user?.uid;

      this.db.collection('users').doc(uid).set({
        codigo: codigo,
        nombre: nombre,
        email: email,
        uid: uid
      })
      this.router.navigateByUrl('/lista-cosas');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
}

getUserAuth(){
  return this.afAuth.authState
}

}
