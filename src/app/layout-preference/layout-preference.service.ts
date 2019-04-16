import { Injectable } from '@angular/core';
import { GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import complexConfig from '../../assets/default-layouts/complex.json';
import defaultConfig from '../../assets/default-layouts/default.json';
import { GoldenLayoutExtService } from './golden-layout-ext.service.js';
import { LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_KEY } from './layout-preference-state-store.js';
import { LayoutPreference } from './layout-preference.interface';

@Injectable({
  providedIn: 'root',
})
export class LayoutPreferenceService {
  private availableLayoutsSubject = new BehaviorSubject<LayoutPreference[]>([]);
  readonly availableLayouts$ = this.availableLayoutsSubject.asObservable();

  private activeLayoutSubject = new BehaviorSubject<LayoutPreference>(undefined);
  readonly activeLayout$ = this.activeLayoutSubject.asObservable();
  set activeLayout(value: LayoutPreference) {
    this.activeLayoutSubject.next(value);
  }
  constructor(private goldenLayoutService: GoldenLayoutService) {

    const layouts: LayoutPreference[] = [
      defaultConfig as any as LayoutPreference,
      complexConfig as any as LayoutPreference,
    ];

    // TODO - load save layouts from User Preferences

    this.activeLayout$.pipe(distinctUntilChanged()).subscribe((newLayout: LayoutPreference) => {
      if (newLayout) {
        this.loadLayout(newLayout);
        localStorage.setItem(LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_KEY, JSON.stringify(newLayout));
      }
    });

    // set defaults

    this.availableLayoutsSubject.next(layouts);

    this.goldenLayoutService.getState().then((layout: LayoutPreference) => {
      this.activeLayout = layout;
    });
  }

  /**
   * Load the passed layout into GoldenLayout
   * @param layout 
   */
  loadLayout(layout: LayoutPreference) {
    const goldenLayout = (this.goldenLayoutService as GoldenLayoutExtService).goldenLayout;
    if (goldenLayout) {
      // remove all existing items
      goldenLayout.root.contentItems.forEach(item => {
        item.remove();
      });

      // add items defined in layout
      layout.content.forEach(item => {
        goldenLayout.root.addChild(item);
      });
    }
  }
}
