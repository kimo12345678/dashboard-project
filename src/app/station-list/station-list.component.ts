import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationCardComponent } from '../station-card/station-card.component';

@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [CommonModule, StationCardComponent],  // Add CommonModule here
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent {
  @Input() stations: any[] = []; // Ensure stations is an input
}
