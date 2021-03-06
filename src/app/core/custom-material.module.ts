import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatChipsModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSpinner,
  MatStepperModule,
  MatToolbarModule,
  MatCardModule,
  MatRippleModule,
  MatTabsModule,
  MatTableModule,
  MatBadgeModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatRippleModule,
  MatTableModule,
  MatBadgeModule,
];

@NgModule({
  imports: modules,
  entryComponents: [MatSpinner],
  exports: modules,
})
export class CustomMaterialModule {}
