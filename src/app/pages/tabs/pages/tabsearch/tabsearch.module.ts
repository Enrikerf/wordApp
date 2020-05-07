import { ApiKerfModule } from 'src/app/shared/modules/api-kerf/api-kerf.module';
import { WordComponent } from '../../../../shared/components/word/word.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsearchPageRoutingModule } from './tabsearch-routing.module';

import { TabsearchPage } from './tabsearch.page';
import { ApiKerfService } from 'src/app/shared/modules/api-kerf/services/api-kerf/api-kerf-service.service';

@NgModule({
  imports: [
    ApiKerfModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TabsearchPageRoutingModule
  ],
  providers:[ApiKerfService],
  declarations: [TabsearchPage,WordComponent]
})
export class TabsearchPageModule {}
