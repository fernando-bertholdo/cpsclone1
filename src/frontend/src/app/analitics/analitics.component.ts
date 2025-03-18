import { Component } from '@angular/core';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';

@Component({
  selector: 'app-analitics',
  imports: [PieChartComponent, BarChartComponent],
  templateUrl: './analitics.component.html',
  styleUrl: './analitics.component.css'
})
export class AnaliticsComponent {

}
