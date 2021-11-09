import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../etudiants/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authStatus!: boolean;

  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSingIn() {
    this.authService.singIn().then(() => {
      // console.log('Connexion réussi');
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['etudiant'])
    });
  }

  onSingOut() {
    this.authService.singOut();
    this.authStatus = this.authService.isAuth;
    // console.log('deconnetion')
  }
}
