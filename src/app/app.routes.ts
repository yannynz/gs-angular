import { Routes } from '@angular/router';
import { DadosOceanicos } from './components/dados-oceanicos/dados-oceanicos.component';


export const routes: Routes = [   
    {path: '', component: DadosOceanicos },
    {path: '**', component: DadosOceanicos }
    
 ];
