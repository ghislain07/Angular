
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {}

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
    await this.authService.singIn().toPromise();
  }

  onSingOut() {
    this.authService.singOut();
    this.authStatus = this.authService.isAuth;
    console.log('deconnetion')
  }

}
