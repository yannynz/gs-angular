import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadoOceanico } from '../interfaces/DadoOceanico';

@Injectable({
  providedIn: 'root',
})

export class OceanDataService {
  private Url = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData';

  constructor(private http: HttpClient) { }

  lista(page: number, size: number, filters: any): Observable<DadoOceanico[]> {
    const params = this.createHttpParams(page, size, filters);

    return this.http.get<DadoOceanico[]>(this.Url, { params });
  }

  private createHttpParams(page: number, size: number, filters: any): HttpParams {
    
    let params = new HttpParams()
      .set('pagina', page.toString())
      .set('quantidade', size.toString());

    if (filters.regiao) {
      params = params.set('regiao', filters.regiao);
      
    }
    if (filters.especies) {
      params = params.set('especies', filters.especies);

    }
    if (filters.projetosConservacao) {
      params = params.set('projetosConservacao', filters.projetosConservacao);
    }
    if (filters.temperaturaAgua) {
      params = params.set('temperatura', filters.temperaturaAgua);
    }
    if (filters.pH) {
      params = params.set('pH', filters.pH);

    }
    if (filters.nivelPoluicao) {
      params = params.set('niveisPoluicao', filters.nivelPoluicao);
    }

    return params;
    
  }
}