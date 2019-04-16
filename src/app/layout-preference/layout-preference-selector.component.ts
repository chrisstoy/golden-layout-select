import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { LayoutPreference } from './layout-preference.interface';
import { LayoutPreferenceService } from './layout-preference.service';

@Component({
  selector: 'layout-preference-selector',
  templateUrl: './layout-preference-selector.component.html',
  styleUrls: ['./layout-preference-selector.component.scss'],
})
export class LayoutPreferenceSelectorComponent {
  @Input() label: string = 'Layout:';
  @Input() placeholder: string = 'Choose Layout';

  activeLayout$ = this.layoutPreferenceService.activeLayout$;
  availableLayouts$ = this.layoutPreferenceService.availableLayouts$;

  constructor(private layoutPreferenceService: LayoutPreferenceService) {
  }

  handleSelectionChange(selection: MatSelectChange) {
    this.layoutPreferenceService.activeLayout = selection.value;
  }

  compareLayoutFn(l1: LayoutPreference, l2: LayoutPreference): boolean {
    return l1 && l2 ? l1.name === l2.name : l1 === l2;
  }
}
