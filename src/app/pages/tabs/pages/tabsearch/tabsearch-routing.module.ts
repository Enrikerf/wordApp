import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsearchPage } from './tabsearch.page';

const routes: Routes = [
  {
    path: '',
    component: TabsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsearchPageRoutingModule {}
