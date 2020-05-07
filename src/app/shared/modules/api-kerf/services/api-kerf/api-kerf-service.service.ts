import { UserService } from "../user/user-service.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from "@angular/common/http";
import { EntryService } from "../entry/entry-service.service";

@Injectable()
export class ApiKerfService {
  constructor(
    public userService: UserService,
    public entryService: EntryService
  ) {}
}
