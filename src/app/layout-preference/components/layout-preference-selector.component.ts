import { Component, Input, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material';
import { LayoutConfig } from '../layout-config.interface';
import { LayoutPreferenceService } from '../services/layout-preference.service';

@Component({
  selector: 'layout-preference-selector',
  templateUrl: './layout-preference-selector.component.html',
  styleUrls: ['./layout-preference-selector.component.scss'],
})
export class LayoutPreferenceSelectorComponent {
  @Input() label: string = 'Layout:';
  @Input() placeholder: string = 'Choose Layout';
  @ViewChild('selector') matSelector: MatSelect;

  activeLayout$ = this.layoutPreferenceService.activeLayout$;
  availableLayouts$ = this.layoutPreferenceService.availableLayouts$;

  constructor(private layoutPreferenceService: LayoutPreferenceService) {}

  handleSelectionChange(selection: MatSelectChange) {
    this.layoutPreferenceService.activeLayout = selection.value;
  }

  compareLayoutFn(l1: LayoutConfig, l2: LayoutConfig): boolean {
    return l1 && l2 ? l1.name === l2.name : l1 === l2;
  }

  saveLayout(layoutName: string) {
    this.layoutPreferenceService.saveLayoutAs(layoutName);
    this.matSelector.close();
  }
}
