import { Injectable } from '@angular/core';
import { GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import { BehaviorSubject } from 'rxjs';
import complexConfig from '../../assets/default-layouts/complex.json';
import defaultConfig from '../../assets/default-layouts/default.json';
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

    this.activeLayout$.subscribe((newLayout: LayoutPreference) => {
      console.log(`New Layout ${newLayout ? newLayout.name : 'undefined'}`);

      // TODO - load the new config and reset GoldenLayout with it
    });

    // set defaults

    // TODO - load saved layout configurations from User prefrerences

    this.availableLayoutsSubject.next(layouts);

    this.activeLayoutSubject.next(this.availableLayoutsSubject.value[0]);
  }
}
