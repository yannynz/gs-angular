import { especie} from "./especieInterface"
import { statusConservacao } from "./statusConservacao"

export interface DadoOceanico {
  regiao: string
  temperaturaMin: number
  temperaturaMax: number
  phMin: number
  phMax: number
  niveisPoluicao: string
  pagina: number
  quantidade: number
  especie: especie[]
  statusConservacao: statusConservacao[]

}

