import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { GoldenLayoutModule, GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import { LayoutPreferenceSelectorComponent } from './components/layout-preference-selector.component';
import { LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER } from './layout-preference-state-store';
import { GoldenLayoutExtService } from './services/golden-layout-ext.service';

const components = [LayoutPreferenceSelectorComponent];
const materialModules = [MatFormFieldModule, MatSelectModule, MatOptionModule, MatIconModule];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ...materialModules,
    GoldenLayoutModule.forRoot({
      components: [],
      defaultLayout: {
        content: [
          {
            type: 'component',
            componentName: 'sample-component',
            title: 'Panel 1',
          },
        ],
      },
    }),
  ],
  providers: [
    LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER,
    {
      provide: GoldenLayoutService,
      useClass: GoldenLayoutExtService,
    },
  ],
})
export class LayoutPreferenceModule {}
