

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'homework',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/homework/homework.module').then(m => m.HomeworkPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/knowledge/knowledge.module').then(m => m.KnowledgePageModule)
          }
        ]
      },
      {
        path: 'tabSearch',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/tabsearch/tabsearch.module').then(m => m.TabsearchPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/homework',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/homework',
    pathMatch: 'full'
  },
  {
    path: 'knowledge',
    loadChildren: () => import('./pages/knowledge/knowledge.module').then( m => m.KnowledgePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
