import { Observable } from "rxjs";
import { Etudiant } from "../models/etudiant";


export interface EtudiantServiceInterface {

  etudiants$: Observable<Etudiant[]>;

  create(etudiant: Etudiant): Observable<boolean>;

  getEtudiants$(): Observable<boolean>;


}
