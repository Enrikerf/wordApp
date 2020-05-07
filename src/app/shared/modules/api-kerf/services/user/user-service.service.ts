import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from "@angular/common/http";
import { Entry } from "../../models/entry";

@Injectable()
export class UserService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  login() {}

  getWords(idUser, filterParams = ""): Observable<string[]> {
    console.log("he pedido mis words");
    const args: any = {};
    this.addAuthorizationHeader();
    args.headers = this.headers;
    return this.get(
      "https://api.kerf.es/user/" + idUser + "/words" + filterParams,
      args
    ).pipe(
      map((res: any) => {
        this.resetHeaders();
        return res;
      })
    );
  }

  get(url, args): Observable<any> {
    return this.http.get(url, args).pipe(
      map((res: ArrayBuffer) => {
        return res;
      })
    );
  }

  public addAuthorizationHeader() {
    this.headers = this.headers.append("Authorization", "Bearer token");
  }

  public resetHeaders() {
    this.headers = new HttpHeaders();
  }
}
