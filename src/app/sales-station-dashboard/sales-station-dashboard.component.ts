import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { MatIconModule } from '@angular/material/icon';

Chart.register(...registerables);

@Component({
  selector: 'app-sales-station-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sales-station-dashboard.component.html',
  styleUrls: ['./sales-station-dashboard.component.scss'],
})
export class SalesStationDashboardComponent {
  stations = [
    { name: 'Station Name', sales: 62721, progress: 80 },
    { name: 'Station Name', sales: 62721, progress: 80 },
    { name: 'Station Name', sales: 'NM', progress: 50 },
  ];

  ngOnInit(): void {
    this.initializeRadarChart();
  }

  initializeRadarChart(): void {
    new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: [
          '00:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        datasets: [
          {
            data: [20, 30, 40, 50, 60, 70, 60, 50, 40, 30, 20, 10],
            backgroundColor: 'rgba(30,144,255,0.2)',
            borderColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            ticks: { display: false },
          },
        },
      },
    });
  }
  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
}
