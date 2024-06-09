import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OceanDataService } from '../../services/data.service'; 
import { DadoOceanico } from '../../interfaces/DadoOceanico';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
    selector: 'app-ocean-data-table',
    standalone: true,
    templateUrl: '../dados-oceanicos/dados-oceanicos.component.html',
    styleUrls: ['../dados-oceanicos/dados-oceanicos.component.css'],
    imports: [ReactiveFormsModule, CommonModule, FormsModule, NavbarComponent]
})
export class  DadosOceanicos{
    @Output() filterChanged = new EventEmitter<any>();

    filters = {
      region: '',
      species: '',
      conservationStatus: '',
      waterTemperature: '',
      pH: '',
      pollutionLevels: ''
    };
DadosOceanicos: any;
  
    applyFilters() {
      this.filterChanged.emit(this.filters);
    }
}
