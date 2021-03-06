import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './sign-uppage/sign-uppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { RegistrarCursosComponent } from './registrar-cursos/registrar-cursos.component';
import { RegistrarInscribirComponent } from './registrar-inscribir/registrar-inscribir.component';
import { InscribirCursosComponent } from './inscribir-cursos/inscribir-cursos.component';
import { RegistrarProfesorComponent} from './registrar-profesor/registrar-profesor.component';
import { ProfileProfesorComponent } from './profile-profesor/profile-profesor.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'Homepage', component: HomepageComponent},
  {path: 'visualizar', component: VisualizarComponent},
  {path: 'registrarCursos', component: RegistrarCursosComponent},
  {path: 'editarCurso/:id', component: RegistrarCursosComponent},
  {path: 'Registrar-Inscribir', component:RegistrarInscribirComponent},
  { path: 'inscribir', component:InscribirCursosComponent},
  { path: 'registrarProfesor', component: RegistrarProfesorComponent},
  { path: 'profileProfesor', component: ProfileProfesorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
