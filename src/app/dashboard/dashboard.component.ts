import { Component } from '@angular/core';
import { SummaryCardComponent } from "../summary-card/summary-card.component";
import { StationListComponent } from "../station-list/station-list.component";
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { GraphComponent } from '../graph/graph.component';
import { MatIcon } from '@angular/material/icon';
import { SalesStationDashboardComponent } from '../sales-station-dashboard/sales-station-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SummaryCardComponent, StationListComponent, BaseChartDirective,FormsModule,MatButtonToggleModule,CommonModule,GraphComponent,MatIcon,SalesStationDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Corrected from `styleUrl` to `styleUrls`
})
export class DashboardComponent {
  public radarChartType: ChartType = 'radar';
  public radarChartData: ChartData<'radar'> = {
    labels: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
    datasets: [
      { data: [20, 30, 25, 40, 45, 35, 50, 60, 55, 70, 65, 80], label: 'Hourly Sales' }
    ]
  };
  selectedViewType: string = 'list';  // Default to 'list'

  graphData = []; // Your graph data for the graph view
  stations = [
    {
      stationName: 'Station Name Dummy',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      transactionCount: '5161',
      maxTransactionHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      stationName: 'Station Name Dummy',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      transactionCount: '5161',
      maxTransactionHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      stationName: 'Station Name Dummy',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      transactionCount: '5161',
      maxTransactionHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      stationName: 'Station Name Dummy',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      transactionCount: '5161',
      maxTransactionHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      stationName: 'Station Name Dummy',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      transactionCount: '5161',
      maxTransactionHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      stationName: 'Station Name Dummy',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      compressionState: 'Compression',
      transactionCount: '5161',
      maxTransactionHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    
    // Add more station data as needed
  ];
  EGP: string = 'EGP'; // Set a default value for demonstration
  trend: string = '-2%';
  // Any additional logic for the component goes here
}
