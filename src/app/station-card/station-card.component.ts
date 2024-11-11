import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [MatIconModule], // Add MatIconModule here
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.scss']
})
export class StationCardComponent {
  @Input() stationName: string = '';
  @Input() totalSales: string = '';
  @Input() totalValue: string = '';
  @Input() compressionState: string = '';
  @Input() transactionCount: string = '';
  @Input() maxTransactionHour: string = '';
  @Input() maxTransactionDateTime: string = '';
}
