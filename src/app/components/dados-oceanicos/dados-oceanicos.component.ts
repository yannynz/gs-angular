import { Component, OnInit } from '@angular/core';
import { OceanDataService } from '../../services/data.service'; 

@Component({
  selector: 'app-ocean-data-table',
  templateUrl: '../dados-oceanicos/dados-oceanicos.component.html',
  styleUrls: ['../dados-oceanicos/dados-oceanicos.component.css']
})
export class OceanDataTableComponent implements OnInit {
  oceanData: any[] = [];
  filteredData: any[] = [];

  constructor(private oceanDataService: OceanDataService) { }

  ngOnInit(): void {
    this.oceanDataService.getOceanData().subscribe(data => {
      this.oceanData = data;
      this.filteredData = data;
    });
  }
  applyFilters(filters: any): void {
    this.filteredData = this.oceanData.filter(item => {
    });
  }
}
