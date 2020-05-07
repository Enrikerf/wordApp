

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeworkPageRoutingModule } from './homework-routing.module';

import { HomeworkPage } from './homework.page';
import { ApiKerfModule } from 'src/app/shared/modules/api-kerf/api-kerf.module';
import { ApiKerfService } from 'src/app/shared/modules/api-kerf/services/api-kerf/api-kerf-service.service';

@NgModule({
  imports: [
    ApiKerfModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomeworkPageRoutingModule
  ],
  providers:[ApiKerfService],
  declarations: [HomeworkPage]
})
export class HomeworkPageModule {}
