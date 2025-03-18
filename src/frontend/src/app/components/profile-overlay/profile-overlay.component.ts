import { Component } from '@angular/core';
import { TrocaUnidadeDialogComponent } from '../troca-unidade-dialog/troca-unidade-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-overlay',
  imports: [MatDialogModule, RouterLink],
  templateUrl: './profile-overlay.component.html',
  styleUrl: './profile-overlay.component.css'
})
export class ProfileOverlayComponent {
  constructor(private dialog: MatDialog) {}

  openTrocaUnidadeDialog() {
    this.dialog.open(TrocaUnidadeDialogComponent, {
      width: '400px',
      height: '400px'
    });
  }
}
