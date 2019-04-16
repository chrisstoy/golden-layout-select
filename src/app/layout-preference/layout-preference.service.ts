import { Injectable } from '@angular/core';
import { GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import complexConfig from '../../assets/default-layouts/complex.json';
import defaultConfig from '../../assets/default-layouts/default.json';
import { GoldenLayoutExtService } from './golden-layout-ext.service.js';
import { LayoutConfig } from './layout-config.interface';
import { LAYOUT_PREFERENCE_LOCAL_STORAGE_KEYS } from './layout-preference-keys.js';

@Injectable({
  providedIn: 'root',
})
export class LayoutPreferenceService {
  private availableLayoutsSubject = new BehaviorSubject<LayoutConfig[]>([]);
  readonly availableLayouts$ = this.availableLayoutsSubject.asObservable();

  private activeLayoutSubject = new BehaviorSubject<LayoutConfig>(undefined);
  readonly activeLayout$ = this.activeLayoutSubject.asObservable();
  set activeLayout(value: LayoutConfig) {
    this.activeLayoutSubject.next(value);
  }
  constructor(private goldenLayoutService: GoldenLayoutService) {

    this.initLayouts();

    this.activeLayout$.pipe(distinctUntilChanged()).subscribe((newLayout: LayoutConfig) => {
      if (newLayout) {
        this.loadLayout(newLayout);
        localStorage.setItem(LAYOUT_PREFERENCE_LOCAL_STORAGE_KEYS.LAST_SELECTED, JSON.stringify(newLayout));
      }
    });

    // set defaults
    this.goldenLayoutService.getState().then((layout: LayoutConfig) => {
      this.activeLayout = layout;
    });
  }

  private initLayouts() {
    const layouts: LayoutConfig[] = [
      defaultConfig as any as LayoutConfig,
      complexConfig as any as LayoutConfig,
    ];

    // load save layouts from local storage
    const userLayoutsJSON = localStorage.getItem(LAYOUT_PREFERENCE_LOCAL_STORAGE_KEYS.USER_LAYOUTS);
    if (userLayoutsJSON) {
      const userLayouts = JSON.parse(userLayoutsJSON);
      layouts.push(...userLayouts);
    }

    this.availableLayoutsSubject.next(layouts);
  }

  /**
   * Return true if the named layout exists
   * @param layoutName name of the layout to look for (case-insensitive)
   */
  hasLayout(layoutName: string): boolean {
    return this.getLayout(layoutName) !== undefined;
  }

  /**
   * Returns the named Layout
   * @param layoutName name of layout (case-insensitive)
   */
  getLayout(layoutName: string): LayoutConfig {
    if (layoutName && this.availableLayoutsSubject.value.length > 0) {
      const layoutToFind = layoutName.toLowerCase();
      return this.availableLayoutsSubject.value.find(item => item.name.toLowerCase() === layoutToFind);
    }
    return undefined;
  }

  /**
   * Load the passed layout into GoldenLayout
   * @param layout 
   */
  loadLayout(layout: LayoutConfig) {
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

  /**
   * Save the current layout as a new layout with the passed name, replacing existing layout if it
   * it already exists
   */
  saveLayoutAs(layoutName: string) {
    const gsService = this.goldenLayoutService as GoldenLayoutExtService;
    const currentLayout = gsService.goldenLayout.toConfig();
    const newLayout = {
      name: layoutName,
      default: false,
      content: currentLayout.content
    };

    const userLayouts = this.availableLayoutsSubject.value.filter(item => !item.default && item.name.toLowerCase() !== layoutName.toLowerCase());
    userLayouts.push(newLayout);

    const userLayoutsJSON = JSON.stringify(userLayouts);
    localStorage.setItem(LAYOUT_PREFERENCE_LOCAL_STORAGE_KEYS.USER_LAYOUTS, userLayoutsJSON);

    this.initLayouts();
    this.activeLayout = this.getLayout(layoutName);
  }
}
