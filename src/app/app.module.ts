import { SignupComponent } from './sign-uppage/sign-uppage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { EmailComponentComponent } from './email-component/email-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { RegistrarCursosComponent } from './registrar-cursos/registrar-cursos.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { RegistrarInscribirComponent } from './registrar-inscribir/registrar-inscribir.component';
import { InscribirCursosComponent } from './inscribir-cursos/inscribir-cursos.component';
import { RegistrarProfesorComponent } from './registrar-profesor/registrar-profesor.component';
import { ProfileProfesorComponent } from './profile-profesor/profile-profesor.component';


const firebaseConfig = {
  apiKey: "AIzaSyAKssgO6MtwM-C7C7eowBkHOi8RXHpysNA",
  authDomain: "registrarcursos.firebaseapp.com",
  projectId: "registrarcursos",
  storageBucket: "registrarcursos.appspot.com",
  messagingSenderId: "554645964409",
  appId: "1:554645964409:web:92fddef470ee6ada7036a8"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignupComponent,
    EmailComponentComponent,
    ProfileComponentComponent,
    VisualizarComponent,
    RegistrarCursosComponent,
    RegistrarInscribirComponent,
    InscribirCursosComponent,
    RegistrarProfesorComponent,
    ProfileProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    provideDatabase(() => getDatabase()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
