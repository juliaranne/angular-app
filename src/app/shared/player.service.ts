import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Player } from './player.model';

const BASE_URL = 'http://localhost:3000/players/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get(BASE_URL)
      .pipe(map((response: any) => response));
  }

  getId() {
    return this.http.get(BASE_URL)
      .pipe(map((response: any) => response[response.length-1].id + 1));
  }

  create(player: Player) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(player), HEADER)
      .pipe(map((response: any) => response));
  }
}