import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadoOceanico } from '../interfaces/DadoOceanico';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {

  private Url: string = "https://fiap-3sis-gs-20241.azurewebsites.net";

  constructor(private http: HttpClient) { }

  List(): Observable<DadoOceanico[]> {
    return this.http.get<DadoOceanico[]>(this.Url) as Observable<DadoOceanico[]>
  }
}