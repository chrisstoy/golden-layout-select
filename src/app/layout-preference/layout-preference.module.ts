import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { LayoutPreferenceSelectorComponent } from './layout-preference-selector.component';

const components = [LayoutPreferenceSelectorComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
})
export class LayoutPreferenceModule {}
