
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this.authStatus = this.authService.isAuth;
  }

  //  onSingIn() {
  //   this.authService.singIn().then(() => {
  //     // console.log('Connexion réussi');
  //     this.authStatus = this.authService.isAuth;
  //     this.router.navigate(['etudiant'])
  //   });
  // }

  async onSingIn() {
    console.log('testing')
    // this.authStatus = this.authService.isAuth;
    await lastValueFrom(this.authService.singIn());
    this.router.navigate(['auth/signin'])


  }

  onSingOut() {
    this.authService.singOut();
    this.authStatus = this.authService.isAuth;
    console.log('deconnetion')
  }

}
