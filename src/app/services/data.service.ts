import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadoOceanico } from '../interfaces/DadoOceanico';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService{
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?';

  constructor(private http: HttpClient) { }
  list(ocean: DadoOceanico): Observable<DadoOceanico[]> {
    var url = this.apiUrl;
    if (ocean.regiao) {
      url = url + 'regiao=' + ocean.regiao + '&';
    }
    if (ocean.especie) {
      url = url + 'especie=' + ocean.especie + '&';
    }
    if (ocean.statusConservacao) {
      url = url + 'statusConservacao=' + ocean.statusConservacao + '&';
    }
    if (ocean.temperaturaMin) {
      url = url + 'temperaturaMin=' + ocean.temperaturaMin + '&';
    }
    if (ocean.temperaturaMax) {
      url = url + 'temperaturaMax=' + ocean.temperaturaMax + '&';
    }
    if (ocean.phMin) {
      url = url + 'phMin=' + ocean.phMin + '&';
    }
    if (ocean.phMax) {
      url = url + 'phMax=' + ocean.phMax + '&';
    }
    if (ocean.niveisPoluicao) {
      url = url + 'nivelPoluicao=' + ocean.niveisPoluicao + '&';
    }
    url = url + 'pagina=' + ocean.pagina + '&';
    url = url + 'quantidade=10  ';

    return this.http.get(url) as Observable<DadoOceanico[]>;
  }
}