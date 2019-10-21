import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Proposta} from "./portador/portador.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postFeedback(proposta: Proposta): Observable<any> {
    return this.http.post('http://localhost:8080/portadores', proposta);
  }
}
