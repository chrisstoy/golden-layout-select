import { InjectionToken, Provider } from '@angular/core';
import { GoldenLayoutStateStore, StateStore } from '@embedded-enterprises/ng6-golden-layout';
import { LAYOUT_PREFERENCE_LOCAL_STORAGE_KEYS } from './layout-preference-keys';

export const LayoutPreferenceStateStore = new InjectionToken('LayoutPreferenceStateStore');

export class LocalStorageStateStore implements StateStore {
    constructor(private readonly key: string) { }

    writeState(_state: any): void {
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

export function LayoutPreferenceLocalStorageStateStoreFactory() {
    return new LocalStorageStateStore(LAYOUT_PREFERENCE_LOCAL_STORAGE_KEYS.LAST_SELECTED);
}

export const LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER: Provider = {
    provide: GoldenLayoutStateStore,
    useFactory: LayoutPreferenceLocalStorageStateStoreFactory
};
