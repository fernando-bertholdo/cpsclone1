import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  public config: any = {
    type: 'bar',

    data: {
      labels: ['Surdez', 'Movimento', 'Cegueira', 'Outros'],
      datasets: [
        {
          label: 'Quantidade de pessoas',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgb(187, 34, 0)', // Vermelho principal (BB2200)
            'rgb(0, 95, 153)', // Azul escuro (contraste)
            'rgb(106, 5, 114)', // Roxo escuro
            'rgb(102, 102, 102)', // Cinza neutro
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      aspectRatio: 1,
    },
  };
  chart: any;
  ngOnInit(): void {
    this.chart = new Chart('myChart2', this.config);
  }
}
