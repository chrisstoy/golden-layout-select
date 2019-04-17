import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { LayoutPreferenceLayoutComponents } from '../layout-preference/layout-preference.service';
import { SampleComponent } from './sample/sample.component';

// Define the components that can be used by Golden Layout
const layoutComponents = [
  {
    componentName: 'sample-component',
    component: SampleComponent,
  },
];

const components = layoutComponents.map((config) => config.component);

const materialModules = [MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule];

@NgModule({
  imports: [CommonModule, ...materialModules],
  declarations: components,
  entryComponents: components,
  providers: [
    {
      // This provides the Components that GoldenLayout uses to build the layout
      provide: LayoutPreferenceLayoutComponents,
      useValue: layoutComponents,
    },
  ],
})
export class LayoutComponentsModule {}
