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
  activeIcon: string = ''; // Default to no icon being active

  // Method to set the active icon
  setActive(icon: string) {
    // If the clicked icon is already active, deactivate it
    this.activeIcon = this.activeIcon === icon ? '' : icon;
  }
}

