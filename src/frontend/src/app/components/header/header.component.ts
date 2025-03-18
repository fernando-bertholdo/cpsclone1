import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar'
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbar, SearchBarComponent, ProfileAvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = signal('My first app');
}
