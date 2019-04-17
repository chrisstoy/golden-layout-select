import { Inject, Optional } from '@angular/core';
import { ComponentConfiguration } from '@embedded-enterprises/ng6-golden-layout';
import { LayoutPreferenceDefaultLayouts, LayoutPreferenceLayoutComponents } from './layout-preference.service';

/**
 * Class that combines the injected Layout Components and Layouts, and in turn provides those as
 * an injection value for GoldneLayoutConfiguration.
 *
 * Why do this?  It "simplifies" configuration for end-users, so they only need to provide two
 * things:
 *  LayoutPreferenceLayoutComponents - array of components that GoldenLayout uses
 *  LayoutPreferenceDefaultLayouts - optional array of default Layouts available to start with
 */
export class InjectedLayoutConfiguration {
  constructor(
    @Inject(LayoutPreferenceLayoutComponents) public components: ComponentConfiguration,
    @Optional() @Inject(LayoutPreferenceDefaultLayouts) public defaultLayouts
  ) {}
}
