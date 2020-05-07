import { EntryServiceModule } from "./services/entry/entry-service.module";
import { UserModule } from "./services/user/user-service.module";
import { UserService } from "./services/user/user-service.service";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiKerfService } from "./services/api-kerf/api-kerf-service.service";
import { EntryService } from "./services/entry/entry-service.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, UserModule, EntryServiceModule],
  providers: [UserService, EntryService, ApiKerfService],
})
export class ApiKerfModule {}
