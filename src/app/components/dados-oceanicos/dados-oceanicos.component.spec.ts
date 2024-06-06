import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosOceanicosComponent } from './dados-oceanicos.component';

describe('DadosOceanicosComponent', () => {
  let component: DadosOceanicosComponent;
  let fixture: ComponentFixture<DadosOceanicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosOceanicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosOceanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
