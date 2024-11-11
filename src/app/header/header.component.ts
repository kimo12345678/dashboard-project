import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import { NativeDateAdapter } from '@angular/material/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for ngModel binding
import { MatIconModule } from '@angular/material/icon';

import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonToggleModule, // Move MatButtonToggleModule here
    MatCheckboxModule,
    CommonModule,
    FormsModule,MatIconModule, // Move MatCheckboxModule here
    MatNativeDateModule, // required for native datepicker functionality
  ],
  providers: [provideNativeDateAdapter(),
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }, // Set your preferred locale
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // component logic
  
  selectedTimeRange: string;
  constructor() {
    // Set a default value if needed
    this.selectedTimeRange = 'today'; // or any default value
  }
}
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
