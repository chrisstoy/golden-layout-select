import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleContainerComponent } from './sample-container.component';

const RouterDefinitions: Routes = [
  {
    path: '',
    component: SampleContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(RouterDefinitions)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
