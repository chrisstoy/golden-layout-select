import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { LayoutPreferenceService } from './layout-preference.service';

@Component({
  selector: 'layout-preference-selector',
  templateUrl: './layout-preference-selector.component.html',
  styleUrls: ['./layout-preference-selector.component.scss'],
})
export class LayoutPreferenceSelectorComponent implements OnInit {
  @Input() label: string = "Layout:";
  @Input() placeholder: string = 'Choose Layout';

  activeLayout$ = this.layoutPreferenceService.activeLayout$;

  get availableLayouts$() {
    return this.layoutPreferenceService.availableLayouts$;
  }

  constructor(private layoutPreferenceService: LayoutPreferenceService) { }

  ngOnInit() { }

  handleSelectionChange(selection: MatSelectChange) {
    // TODO - handle swapping the active layout (if it is different)
    this.layoutPreferenceService.activeLayout = selection.value;
  }
}
