import { EntryService } from './entry-service.service';
import { HttpClient } from '@angular/common/http';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [EntryService],
})
export class EntryServiceModule {}
