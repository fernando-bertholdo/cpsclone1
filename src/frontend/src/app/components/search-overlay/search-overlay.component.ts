import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SearchBarService } from '../../services/search-bar.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-search-overlay',
  imports: [MatDivider, MatListModule, MatIcon, MatIconButton],
  templateUrl: './search-overlay.component.html',
  styleUrl: './search-overlay.component.css'
})
export class SearchOverlayComponent {

  searchBarService = inject(SearchBarService);
  recentSearches = this.searchBarService.recentSearches;

  deleteRecentSearch(searchTerm: string, event: Event) {
    this.searchBarService.deleteRecentSearch(searchTerm);
    event.stopPropagation();
  }

  performSearch(searchTerm: string, event: Event) {
    this.searchBarService.search(searchTerm);
    event.stopPropagation();
  }

}
