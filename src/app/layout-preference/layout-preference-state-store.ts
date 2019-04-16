import { InjectionToken, Provider } from '@angular/core';
import { GoldenLayoutStateStore, StateStore } from '@embedded-enterprises/ng6-golden-layout';

export const LayoutPreferenceStateStore = new InjectionToken('LayoutPreferenceStateStore');

export const LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_KEY = 'LayoutPreferenceService.last-selected-layout';

export class LocalStorageStateStore implements StateStore {
    constructor(private readonly key: string) { }

    writeState(state: any): void {
        // don't do anything when asked to write.  this is handle in the LayoutPreferenceService
    }

    loadState(): Promise<any> {
        // load the last saved config
        const state = localStorage.getItem(this.key);
        return state
            ? Promise.resolve(JSON.parse(state))
            : Promise.reject(`No state found using key: ${this.key}`);
    }
}

export function LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_FACTORY() {
    return new LocalStorageStateStore(LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_KEY);
}

export const LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE = new LocalStorageStateStore(LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_KEY);

export const LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER: Provider = {
    provide: GoldenLayoutStateStore,
    useFactory: LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_FACTORY
};
