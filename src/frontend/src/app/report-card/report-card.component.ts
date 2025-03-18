import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListService } from '../services/list.service';
import { Student } from '../model/student.type';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.vfs;


@Component({
  selector: 'app-report-card',
  imports: [FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, RouterLink],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.css',
})
export class ReportCardComponent implements OnInit {
  needs: string[] = [
    "Amigdalite", "Bronquite", "Diabetes", "Sinusite", "Palpitação", 
    "Hemorragia", "Dispnéia (falta de ar)", "Convulsão", "Sarampo", 
    "Coqueluche", "Rubéola", "Catapora", "Tuberculose", "Caxumba", 
    "Outra(s)", "Cegueira", "Baixa Visão", "Surdez Severa ou Profunda",
    "Surdez Leve ou Moderada", "Intelectual/Cognitiva", "Física", 
    "Múltipla", "Altas habilidades e Superdotação", 
    "Transtornos do Espectro Autista (TGD)", "Dislexia", "TDAH e afins",
    "Síndrome de Down", "Síndrome De Asperger", "Síndrome De Rett", 
    "Transtorno Desintegrativo da Infância"
  ];

  equipaments: string[] = [
    "Cadeira de Rodas", "Bengala para Deficientes Visuais", "Andador", 
    "Muletas", "Próteses e Órteses", "Elevador para Cadeirantes", 
    "Rampas de Acesso", "Plataforma Elevatória", "Audiolivros", 
    "Aparelho Auditivo", "Sistema FM para Deficientes Auditivos", 
    "Legenda Oculta (Closed Caption)", "Software de Leitura de Tela", 
    "Teclado Adaptado", "Mouse Adaptado", "Impressora Braille", 
    "Reglete e Punção para Braille", "Computador com Acessibilidade", 
    "Sistema de Comunicação Alternativa", "Libras (Intérprete ou Vídeo)", 
    "Aplicativos de Acessibilidade", "Tapetes e Pisos Táteis", 
    "Sinalização em Braille", "Lupa Eletrônica", "Mesa Adaptada", 
    "Veículos Adaptados", "Sistema de Voz para Comandos", 
    "Óculos com Tecnologia Assistiva", "Cadeiras Especiais para Banho", 
    "Outros"
  ];

  needAssist = new FormControl(false);
  needEquipament = new FormControl(false);

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

  generatePDF() {
    const documentDefinition = {
      content: [
        { text: "Ficha do Aluno", style: "header" },
        { text: `Nome: ${this.student?.name || 'N/A'}`, style: "bodyText" },
        { text: `Matrícula: ${this.student?.academic_id || 'N/A'}`, style: "bodyText" },
        { text: `Email: ${this.student?.email || 'N/A'}`, style: "bodyText" },
        { text: `Telefone: ${this.student?.contact_phone || 'N/A'}`, style: "bodyText" },
        { text: `Data de Nascimento: ${this.student?.date_of_birth}`, style: "bodyText" },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 10,
        },
        bodyText: {
          fontSize: 12,
          marginBottom: 5,
        },
      },
    };

    pdfMake.createPdf(documentDefinition).download("Ficha_Aluno.pdf");
  }
}
