import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoldenLayoutConfiguration, GoldenLayoutModule } from '@embedded-enterprises/ng6-golden-layout';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';

  window['$'] = $;


const config: GoldenLayoutConfiguration = {
  components: [
    {
      component: SampleComponent,
      componentName: 'sample-component',
    }
  ],
  defaultLayout: {
    content: [{
      type: "row",
      content: [
        {
          type: 'component',
          componentName: 'sample-component',
          title: 'Panel 1',
        },
        {
          type: 'component',
          componentName: 'sample-component',
          title: 'Panel 2',
        },
      ]
    }]
  }
};

const materialModules = [
  MatCardModule,
]

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...materialModules,
    GoldenLayoutModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SampleComponent]
})
export class AppModule { }
