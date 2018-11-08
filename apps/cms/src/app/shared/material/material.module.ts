import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatNativeDateModule,
} from '@angular/material';

export const MatModules = [
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatNativeDateModule,
]

@NgModule({
  imports: [CommonModule, ...MatModules],
  exports: [...MatModules],
  declarations: []
})
export class MaterialModule { }
