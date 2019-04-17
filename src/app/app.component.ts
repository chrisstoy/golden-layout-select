import { Component } from '@angular/core';
import { ComponentConfiguration, GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private goldenLayoutService: GoldenLayoutService) {}
  get availablePanels(): ComponentConfiguration[] {
    return this.goldenLayoutService.getRegisteredComponents();
  }
  addPanel(panelConfig: ComponentConfiguration) {
    this.goldenLayoutService.createNewComponent(panelConfig, `${panelConfig.componentName} - ${Math.random()}`);
  }
}
