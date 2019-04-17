import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { GoldenLayoutModule } from '@embedded-enterprises/ng6-golden-layout';
import complexLayout from '../../assets/default-layouts/complex.json';
import defaultLayout from '../../assets/default-layouts/default.json';
import { LayoutConfig } from '../layout-preference/layout-config.interface';
import { LayoutPreferenceService } from '../layout-preference/services/layout-preference.service';
import { SampleComponent } from './components/sample.component';
import { SampleContainerComponent } from './sample-container.component';
import { SampleRoutingModule } from './sample-routing.module';

// Define the components that can be used by Golden Layout
const layoutComponents = [
  {
    componentName: 'sample-component',
    component: SampleComponent,
  },
];

const components = [SampleContainerComponent, ...layoutComponents.map((config) => config.component)];

const materialModules = [MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule];

@NgModule({
  imports: [CommonModule, ...materialModules, SampleRoutingModule, GoldenLayoutModule],
  exports: components,
  declarations: components,
  entryComponents: components,
})
export class SampleModule {
  constructor(private layoutPreferenceService: LayoutPreferenceService) {
    // Initialize LayoutPreferences/GoldenLayout with components and default layouts
    const defaultLayouts = [(defaultLayout as any) as LayoutConfig, (complexLayout as any) as LayoutConfig];
    this.layoutPreferenceService.initialize(layoutComponents, defaultLayouts);
  }
}
