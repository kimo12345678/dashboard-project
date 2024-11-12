import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,MatIconModule],  // Add MatIconModule here
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeIcon: string = 'speed';  // Default active icon// Default to no icon being active

  // Method to set the active icon
  setActive(icon: string) {
    this.activeIcon = icon;  // Set the clicked icon as active
  }
}

