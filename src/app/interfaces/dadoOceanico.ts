import { especies} from "./especiesInterface"
import { projetosConservacao } from "./projetosConservacao"

export interface DadoOceanico {
  regiao: string
  temperaturaAgua: number
  pH: number
  nivelPoluicao: string
  page: number
  size: number
  especies: especies[]
  projetosConservacao: projetosConservacao[]

}

