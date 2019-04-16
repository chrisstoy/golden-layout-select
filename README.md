# GoldenLayout Run-Time Layout Selection

This app demonstrates how to implement duynamic layout switching with [ng-golden-layout](https://github.com/EmbeddedEnterprises/ng6-golden-layout)

## How to Use

Add the `LayoutPreferenceModule` to your `app.module.ts`. Then, add the following to the `providers` section:

```
    LAYOUT_PREFERENCES_LOCAL_STORAGE_STATE_STORE_PROVIDER,
    {
      provide: GoldenLayoutService,
      useClass: GoldenLayoutExtService,
    },
```

This adds the State provider and patches the GoldenLayoutService to allow access to the base GoldenLayout object.

To add the default Layout Selector, add the following to your html:

```
<layout-preference-selector><layout-preference-selector>
```

This adds a MatSelect that allows the user to pick wich Layout to display.

## More Info

See the app.component to see how the LayoutPreference module can be used.
