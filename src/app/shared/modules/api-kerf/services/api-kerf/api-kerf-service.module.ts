import { EntryServiceModule } from './../entry/entry-service.module';
import { UserService } from "../user/user-service.service";
import { ApiKerfService } from "./api-kerf-service.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserModule } from "../user/user-service.module";

@NgModule({
  declarations: [],
  imports: [UserModule,EntryServiceModule, CommonModule],
  providers: [ApiKerfService],
})
export class ApiKerfServiceModule {
}
