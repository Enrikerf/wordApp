import { environment } from './../../../../../../environments/environment';
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
export class EntryService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  searchEntries(filterParams): Observable<string[]> {
    const args: any = {};
    this.addAuthorizationHeader();
    args.headers = this.headers;
    return this.get(
      "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^" + filterParams,
      args
    ).pipe(
      map((res: any) => {
        this.resetHeaders();
        return res.results.data;
      })
    );
  }

  getEntry(filterParams): Observable<Entry> {
    const args: any = {};
    this.addAuthorizationHeader();
    args.headers = this.headers;
    return this.get(
      "https://wordsapiv1.p.rapidapi.com/words/" + filterParams,
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
    this.headers = this.headers.append(
      "x-rapidapi-host",
      environment.apiWord.host
    );

    this.headers = this.headers.append(
      "x-rapidapi-key",
      environment.apiWord.key
    );
  }

  public resetHeaders() {
    this.headers = new HttpHeaders();
  }
}
