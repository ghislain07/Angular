import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false //l'utilisateur est déconnecté en premier lieu

  singIn() {
    return from(
      new Promise<boolean | undefined>(
        (resolve, reject) => {
          const timeout = setTimeout(
            () => {
              this.isAuth = true;
              resolve(true);
              clearTimeout(timeout);
            }, 2000
          );
        }
      )
    );
  }

  singOut() {
    this.isAuth = false;
  }

  // createNewUser(email: string, password: string) {
  //   return new Promise(
  //     (resolve,reject) => {
  //       firebase.auth()
  //     }
  //   )
  // }
}
