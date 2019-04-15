import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  constructor() {
    const layouts: LayoutPreference[] = [
      {
        default: true,
        label: 'Inbound Planner',
      },
      {
        default: true,
        label: 'Dispatcher',
      },
    ];

    // set defaults

    // TODO - load saved layout configurations from User prefrerences

    this.availableLayoutsSubject.next(layouts);

    this.activeLayoutSubject.next(this.availableLayoutsSubject.value[0]);
  }
}
