import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListService } from '../services/list.service';
import { Student } from '../model/student.type';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProfessionalCompleteComponent } from '../components/professional-complete/professional-complete.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';

@Component({
  selector: 'app-calendar-page',
  imports: [
    MatButtonToggleModule,
    RouterLink,
    ProfessionalCompleteComponent,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTimepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPageComponent {
  needs: string[] = [
    'Otorrinolaringologia', // Amigdalite
    'Pneumologia', // Bronquite, Tuberculose, Dispnéia (falta de ar)
    'Endocrinologia', // Diabetes
    'Otorrinolaringologia', // Sinusite
    'Cardiologia', // Palpitação
    'Hematologia', // Hemorragia
    'Neurologia', // Convulsão
    'Infectologia', // Sarampo, Coqueluche, Rubéola, Catapora, Tuberculose, Caxumba
    'Oftalmologia', // Cegueira, Baixa Visão
    'Otorrinolaringologia', // Surdez Severa ou Profunda, Surdez Leve ou Moderada
    'Neurologia', // Intelectual/Cognitiva
    'Fisioterapia', // Física
    'Medicina de Reabilitação', // Múltipla
    'Neuropsicologia', // Altas habilidades e Superdotação
    'Psiquiatria', // Transtornos do Espectro Autista (TGD), TDAH e afins
    'Neurologia Pediátrica', // Dislexia, Síndrome de Down, Síndrome de Asperger, Síndrome de Rett, Transtorno Desintegrativo da Infância
    'Psicopedagogia', // Dislexia, TDAH e afins
    'Terapia Ocupacional', // Síndrome de Down, Autismo, Deficiências múltiplas
    'Fonoaudiologia', // Surdez, Dislexia, TDAH, Autismo
    'Pediatria', // Doenças infantis em geral
  ];

  route = inject(ActivatedRoute);
  private listService = inject(ListService);
  id: string | null = null;
  student: Student | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.listService.getStudentById(this.id).subscribe((student) => {
          this.student = student;
        });
      }
    });
  }
}
