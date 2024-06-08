import { especie} from "./especieInterface"
import { ProjetoConservacao } from "./projeto-conservacao"

export interface DadoOceanico {
  regiao: string
  temperaturaAgua: number
  ph: number
  niveisPoluicao: string
  especie: especie[]
  projetoConservacao: ProjetoConservacao[]
}
