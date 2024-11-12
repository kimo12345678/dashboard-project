import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Chart, registerables } from 'chart.js';
type Tab = 'Sales' | 'Transaction' | 'Value' | 'Compression';

@Component({
  selector: 'app-graph',
  standalone: true,
  templateUrl: './graph.component.html',
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  tabs: Tab[] = ['Sales', 'Transaction', 'Value', 'Compression'];
  selectedTab: Tab = this.tabs[0];
  chart: Chart | null = null;

  dataSets: Record<Tab, number[]> = {
    'Sales': [300, 150, 200, 100],
    'Transaction': [250, 180, 150, 130],
    'Value': [200, 140, 190, 110],
    'Compression': [220, 160, 170, 120]
  };

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const data = this.dataSets[this.selectedTab]; // Get initial data based on selected tab
    this.chart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Station Name', 'Station Name', 'Station Name', 'Station Name'],
        datasets: [{
          label: this.selectedTab,
          data: data,
          backgroundColor: '#f37220',
          barThickness: 20,
          maxBarThickness: 20
        }]
      },
      options: {
        scales: {
          x: { display: true },
          y: { beginAtZero: true }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;

    if (this.chart) {
      this.chart.data.datasets[0].data = this.dataSets[tab];
      this.chart.data.datasets[0].label = tab;
      this.chart.update(); // Re-render the chart with new data
    }
  }
}
