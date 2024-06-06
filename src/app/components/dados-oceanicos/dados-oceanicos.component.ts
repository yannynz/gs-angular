import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DadoOceanico } from '../../interfaces/dado-oceanico';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-dados-oceanicos',
  standalone: true,
  imports: [BrowserModule, FormsModule, HttpClientModule],
  templateUrl: './dados-oceanicos.component.html',
  styleUrl: './dados-oceanicos.component.css',
})
export class DadosOceanicosComponent implements OnInit {
  dados: DadoOceanico[] = [];
  filtro: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.dataService
      .obterDados(this.filtro)
      .subscribe((data: DadoOceanico[]) => {
        this.dados = data;
      });
  }
}
