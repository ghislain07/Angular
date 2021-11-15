import { lastValueFrom } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.scss']
})
export class ListeEtudiantComponent implements OnInit {

  etudiants$ = this.service.etudiants$;
  constructor(@Inject(EtudiantService) private service: EtudiantService,
  ) { }

  async ngOnInit() {
    await lastValueFrom(this.service.getEtudiants$());
  }



}
