import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OceanDataService } from '../../services/data.service';
import { DadoOceanico} from '../../interfaces/DadoOceanico';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-ocean-conditions',
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule,FormsModule],
  standalone: true,
  templateUrl: './dados-oceanicos.component.html',
  styleUrls: ['./dados-oceanicos.component.css']
})
export class OceanConditionsComponent implements OnInit {
  filters: any = {
    regiao: '',
    especies: '',
    projetosConservacao: '',
    temperaturaAgua: '',
    pH: '',
    nivelPoluicao: ''
  };

  DadoOceanico: DadoOceanico[] = [];
  page: number = 1;
  totalPages: number = 1;

  constructor(private OceanDataService: OceanDataService) {}

  ngOnInit(): void {
    this.loadPage(this.page);
  }

  applyFilters(): void {
    this.page = 1;
    this.loadPage(this.page);
  }

  loadPage(page: number): void {
    this.OceanDataService.lista(page, 10, this.filters).subscribe(
      data => {
        this.DadoOceanico = data;
      },
      error => {
        console.error('Error fetching data', error);
    }
  );}
}