import { NgModule } from '@angular/core';
import { MatDividerModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module.js';
import { AppComponent } from './app.component';
import { LayoutPreferenceModule } from './layout-preference/layout-preference.module.js';

window['$'] = $;

const materialModules = [
  MatDividerModule,
  MatTooltipModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ...materialModules, LayoutPreferenceModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
