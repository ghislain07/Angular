import { EtudiantServiceInterface } from './../etudiants/contrats/etudiants';
import { Etudiant } from './../etudiants/models/etudiant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService implements EtudiantServiceInterface {
  private url: string = 'http://localhost:3000/etudiants';
  private _etudiants$ = new BehaviorSubject<Etudiant[]>([]);

  public readonly etudiants$ = this._etudiants$.pipe(
    startWith([] as Etudiant[])
  );
  // create(etudiant: Etudiant) {
  //   return from(
  //     new Promise((resolve, rejects) => {
  //       const timeout = setTimeout(() => {
  //         const etu_ = {
  //           nomEtudiant: etudiant?.nomEtudiant,
  //           prenonEtudiant: etudiant?.prenomEtudiant,
  //           id: new Date().getMilliseconds(),
  //         };
  //         this._etudiants$.next([...this._etudiants$.getValue(), ...[etu_]]);
  //         resolve(true);
  //         clearTimeout(timeout);
  //         console.log(etu_);
  //       }, 1000);
  //     })
  //   );
  // }

  create(etudiant: Etudiant) {
    const etu_ = {
      id: new Date().getMilliseconds(),
      nomEtudiant: etudiant?.nomEtudiant,
      prenonEtudiant: etudiant?.prenomEtudiant,
    };
    return this.httpClient.post(this.url, etu_).pipe(
      map((etudiant_) => {
        if (etudiant_) {
          this._etudiants$.next([...this._etudiants$.getValue(), ...[etudiant_ as Etudiant]]);
          return true;
        } else {
          return false;
        }
      })
    )
  }

  getEtudiants$(): Observable<boolean> {
    return this.httpClient.get(this.url).pipe(
      map((state) => {
        if (state && Array.isArray(state)) {
          this._etudiants$.next(state as Etudiant[]);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  constructor(private httpClient: HttpClient) { }
}
