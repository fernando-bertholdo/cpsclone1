import { OverlayModule } from '@angular/cdk/overlay';
import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SearchBarService } from '../../services/search-bar.service';
import { SearchOverlayComponent } from "../search-overlay/search-overlay.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [MatIconButton, MatIcon, OverlayModule, SearchOverlayComponent, NgClass],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchBarService = inject(SearchBarService);
  overlayOpen = this.searchBarService.overlayOpen;
  searchTerm = this.searchBarService.searchTerm;

  search(searchTerm: string) {
    if (!searchTerm) return;

    this.searchBarService.search(searchTerm);
  }

}
