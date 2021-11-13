import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, startWith } from 'rxjs';
import { Etudiant } from '../etudiants/models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private _etudiants$ = new BehaviorSubject<Etudiant[]>([]);

  public etudiants$ = this._etudiants$.pipe(
    startWith([] as Etudiant[])
  );


  create(etudiant: Etudiant) {
    return from(
      new Promise((resolve, rejects) => {
        const timeout = setTimeout(() => {
          const etu_ = {
            nomEtudiant: etudiant?.nomEtudiant,
            prenonEtudiant: etudiant?.prenomEtudiant,
            id: new Date().getMilliseconds(),
          };
          this._etudiants$.next([...this._etudiants$.getValue(), ...[etu_]]);
          resolve(true);
          clearTimeout(timeout);
        }, 1000);
      })
    );
  }

  saveEtudiantToServer() {
    this.httpClient
      .post(
        'https://http-client-demo-220eb-default-rtdb.firebaseio.com/prof.json',
        this.etudiants$
      ) .subscribe({complete: console.log, error: console.info});
      // .subscribe(
      //   () => {
      //     console.log('Enrégistrement terminé');
      //   },
      //   (error: string) => {
      //     console.log('Erreur de sauvegarde' + error);
      //   }
      // );
  }
  //  getEtudiantsFromServer() {
  //   this.httpClient
  //     .get<Etudiant[]>(
  //       'https://http-client-demo-220eb-default-rtdb.firebaseio.com/etudiants.json'
  //     )
  //     .subscribe(
  //       (response) => {
  //         this.etudiants$ = response;
  //       },
  //       (error) => {
  //         console.log('Erreur de chargement' + error);
  //       }
  //     );
  // }

  // saveEtudiantToServer1() {
  //   if(this.httpClient.post('https://http-client-demo-220eb-default-rtdb.firebaseio.com/prof.json',
  //       this.etudiants$){
  //         this.httpClient
  //     .post(
  //       'https://http-client-demo-220eb-default-rtdb.firebaseio.com/prof.json',
  //       this.etudiants$
  //     )
  //     .subscribe(
  //       () => {
  //         console.log('Enrégistrement terminé');
  //       },
  //       (error) => {
  //         console.log('Erreur de sauvegarde' + error);
  //       }
  //     );
  //       })else(this.httpClient.put('https://http-client-demo-220eb-default-rtdb.firebaseio.com/prof.json',
  //       this.etudiants$){
  //         this.httpClient
  //     .put(
  //       'https://http-client-demo-220eb-default-rtdb.firebaseio.com/prof.json',
  //       this.etudiants$
  //     )
  //     .subscribe(
  //       () => {
  //         console.log('Enrégistrement terminé');
  //       },
  //       (error) => {
  //         console.log('Erreur de sauvegarde' + error);
  //       }
  //     );
  //       }

  // }


  constructor(private httpClient: HttpClient) { }
}
