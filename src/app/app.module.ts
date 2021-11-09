import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { CardComponent } from './cards/card/card.component';
import { CardTitleComponent } from './cards/card-title/card-title.component';
import { CardContentComponent } from './cards/card-content/card-content.component';
import { CardFooterComponent } from './cards/card-footer/card-footer.component';
import { EtudiantComponent } from "./etudiants/etudiant/EtudiantComponent.1";
import { EtudiantService } from './etudiants/services/etudiant.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './etudiants/services/auth.service';
import { HeaderComponent } from './headers/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './etudiants/services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path:'auth/signup', component: SignupComponent},
  { path: '', pathMatch: 'full', redirectTo: 'auth/signin'}
  // { path: '', component: EtudiantComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardFooterComponent,
    EtudiantComponent,
    AuthComponent,
    AppareilViewComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EtudiantService, AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
