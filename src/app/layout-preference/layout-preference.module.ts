import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { LayoutPreferenceSelectorComponent } from './layout-preference-selector.component';

const components = [LayoutPreferenceSelectorComponent];
const materialModules = [
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatIconModule,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, ...materialModules],
})
export class LayoutPreferenceModule { }
