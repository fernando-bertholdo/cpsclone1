import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-troca-unidade-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatSelect, MatOption],
  templateUrl: './troca-unidade-dialog.component.html',
  styleUrl: './troca-unidade-dialog.component.css'
})
export class TrocaUnidadeDialogComponent {

}
