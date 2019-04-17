import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { GoldenLayoutConfiguration } from '@embedded-enterprises/ng6-golden-layout';
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
  exports: components,
  entryComponents: components,
  providers: [
    {
      provide: GoldenLayoutConfiguration,
      useValue: {
        components: layoutComponents,
        defaultLayout: {
          content: [],
        },
      },
    },
  ],
})
export class LayoutComponentsModule {}
