import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantComponent } from 'src/app/etudiants/etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EtudiantComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EtudiantComponent]
})
export class EtudiantModule { }
