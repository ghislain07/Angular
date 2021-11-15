import { lastValueFrom } from 'rxjs';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
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
  ) { }

  ngOnInit(): void {

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
      await lastValueFrom(this.service.create(this.model.getRawValue()));
      this.model.reset();
    }
    // this.service.etudiants$.subscribe((etudiant) => console.log(etudiant));
  }

}
