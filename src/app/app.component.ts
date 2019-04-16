import { Component } from '@angular/core';
import { ComponentConfiguration, GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import { SampleComponent } from './components/sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private goldenLayoutService: GoldenLayoutService) { }

  addPanel() {

    const panelConfig: ComponentConfiguration = {
      componentName: 'sample-component',
      component: SampleComponent
    }

    this.goldenLayoutService.createNewComponent(panelConfig, `Panel ${Math.random()}`);
  }


}
