import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://sua-api.com/dados';

  constructor(private http: HttpClient) { }

  obterDados(filtro: any): Observable<any[]> {
    let params = new HttpParams();
    for (const key in filtro) {
      if (filtro[key] !== '') {
        params = params.append(key, filtro[key]);
      }
    }
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
