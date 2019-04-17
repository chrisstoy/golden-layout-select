import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { GoldenLayoutModule, GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import { GoldenLayoutExtService } from './golden-layout-ext.service';
import { LayoutPreferenceSelectorComponent } from './layout-preference-selector.component';
import { LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER } from './layout-preference-state-store';

const components = [LayoutPreferenceSelectorComponent];
const materialModules = [MatFormFieldModule, MatSelectModule, MatOptionModule, MatIconModule];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, ...materialModules, GoldenLayoutModule],
  providers: [
    LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER,
    {
      provide: GoldenLayoutService,
      useClass: GoldenLayoutExtService,
    },
  ],
})
export class LayoutPreferenceModule {}
