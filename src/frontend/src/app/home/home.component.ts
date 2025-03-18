import { Component, signal } from '@angular/core';
import { ManageContainerComponent } from '../components/manage-container/manage-container.component';
import { ListComponent } from '../components/list/list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ManageContainerComponent, ListComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeMessage = signal('Welcome to my first Angular app!');

  titleManager = signal('Gerenciador');
  subTitleManager = signal('Gerencie atendimentos da sua unidade');
  
  titleAnalitics = signal('Analíticas');
  subTitleAnalitics = signal('Entenda o que os dados dizem sobre sua unidade');

  svgPathManage = signal('./assets/images/icon-admin.svg');
  svgPathAnalitics = signal('./assets/images/icon-analitics.svg');
}
