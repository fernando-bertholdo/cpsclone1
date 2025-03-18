import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-manage-container',
  standalone: true,
  imports: [],
  templateUrl: './manage-container.component.html',
  styleUrl: './manage-container.component.css'
})
export class ManageContainerComponent {
  title = input('Default message');
  subTitle = input('Default sub message');
  svgPath = input('');
}