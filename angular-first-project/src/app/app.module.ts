import { ListeEtudiantComponent } from './etudiants/listes/liste-etudiant/liste-etudiant.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiants/etudiant/etudiant.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './headers/header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from './services/etudiant.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path:'auth/signup', component: SignupComponent},
  { path: 'liste', component: ListeEtudiantComponent},
  { path: '', pathMatch: 'full', redirectTo: 'auth/signin'}
  // { path: '', component: EtudiantComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    ListeEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
