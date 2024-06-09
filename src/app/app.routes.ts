import { Routes } from '@angular/router';
import { OceanConditionsComponent } from './components/dados-oceanicos/dados-oceanicos.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [   
    {path: '', component: HomeComponent },
    {path: 'OceanConditions', component: OceanConditionsComponent}    
 ];
