import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

const BASE_URL = 'http://localhost:3000/players/';

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL)
      .pipe(map((response: any) => response));
  }
}