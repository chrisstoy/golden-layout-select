import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoldenLayoutModule } from '@embedded-enterprises/ng6-golden-layout';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { LayoutComponentsModule } from './components/layout-components.module';
import { LayoutPreferenceModule } from './layout-preference/layout-preference.module';

window['$'] = $;

const materialModules = [MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...materialModules,
    GoldenLayoutModule,
    LayoutPreferenceModule,
    LayoutComponentsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
