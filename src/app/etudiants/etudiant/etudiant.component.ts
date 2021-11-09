import { Etudiant } from './../models/etudiant';
import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss'],
})
export class EtudiantComponent implements OnInit {
  nom!: string;
  // @Input() prenom!: string;
  // label!: string
  // @Input() prenom!: string;
  // date = new Date();
  // @Input() model!: FormGroup;

  @Input() model: FormGroup = this.builder.group({
    nomEtudiant: [
      undefined,
      Validators.compose([Validators.required, Validators.maxLength(20)]),
    ],
    prenomEtudiant: [
      undefined,
      Validators.compose([Validators.required, Validators.maxLength(20)]),
    ],
  });

  etudiants$ = this.service.etudiants$;

  // @HostListener('keyup.enter')
  // onKeyPress(event: string) {
  //   if (this.nom && this.nom !== '') {
  //     this.onAjouter();
  //   }
  // }
  constructor(
    @Inject(EtudiantService) private service: EtudiantService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.service.etudiants$.subscribe((etudiant) => {
    //   this.etudiants$ = etudiant;
    // });
  }

  // async onAjouter() {
  //   if (this.nom && this.nom !== '') {
  //     await this.service
  //       .create({
  //         nomEtudiant: this.nom,
  //         id: 0,
  //       })
  //       .toPromise();
  //     this.nom = '';
  //   }
  //   // console.log('ajouter');
  //   // console.log(this.nom);
  //   // console.log(this.etudiants$);
  // }
  async onAjouter() {
    if (this.model.valid) {
      await this.service.create(this.model.getRawValue()).toPromise();
      this.service.saveEtudiantToServer();
      // this.model.reset();
    }
    this.service.etudiants$.subscribe((etudiant) => console.log(etudiant));
  }

  // async onAjouter() {
  // this.service.saveEtudiantToServer();
  // }

  // onFetch() {
  //   this.service.getEtudiantsFromServer();
  // }
}
