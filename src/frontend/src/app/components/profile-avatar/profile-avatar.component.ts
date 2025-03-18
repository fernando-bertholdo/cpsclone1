import { OverlayModule } from '@angular/cdk/overlay';
import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ProfileOverlayComponent } from '../profile-overlay/profile-overlay.component';
@Component({
  selector: 'app-profile-avatar',
  imports: [OverlayModule, NgClass, ProfileOverlayComponent],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.css',
})
export class ProfileAvatarComponent {
  overlayOpen = signal(false);
  username = input('Username');
  initials = input('RG');
}
