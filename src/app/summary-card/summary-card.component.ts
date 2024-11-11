import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss'
})
export class SummaryCardComponent {
  @Input() value: string = '';
  @Input() unit: string = '';
  @Input() title: string = '';
  @Input() change: string = '';
  @Input() changeUnit: string = '';
  @Input() isPositive: boolean = true;

}
