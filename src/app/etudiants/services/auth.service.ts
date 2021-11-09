import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAuth = false //l'utilisateur est déconnecté en premier lieu

  singIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          },2000
        );
      }
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
