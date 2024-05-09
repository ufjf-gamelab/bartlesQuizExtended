import { passarPergunta } from "./main.js";

let arquetipos = {
    killer: 0,
    achiever: 0,
    socializer: 0,
    explorer: 0,

    killer8D: 0,
    achiever8D: 0,
    socializer8D: 0,
    explorer8D: 0,
    
}
function nomeArquetipo8D(eixo, nomeArquetipo){
    console.log(eixo,nomeArquetipo)
    const nomesImplicitos = ['Planner','Scientist','Network','Politician']
    const nomesExplicitos = ['Opportunist','Hacker','Friend','Griefer']
    const nomes = [nomesImplicitos,nomesExplicitos]
    const index = nomes[eixo][nomeArquetipo]
    return nomes[eixo][nomeArquetipo]
}
export function calcularResultado(){
    const keys = ['achiever','explorer','socializer','killer']
    const tamanho = arquetipos.achiever + arquetipos.explorer + arquetipos.socializer + arquetipos.killer 
    const resultado2 = {}

    for (let i = 0; i < keys.length; i++) {
        console.log(arquetipos)
        const arquetipo = arquetipos[keys[i]] 
        const ImplicitoExplicito = arquetipos[keys[i]+'8D']
        const nome2 = nomeArquetipo8D(ImplicitoExplicito,i)

        const porcentagem = (arquetipo/tamanho)*100

        resultado2[keys[i]] ={
            porcetagem: porcentagem,
            ImplicitoExplicito: ImplicitoExplicito,
            nome: nome2
        }
    }
    return resultado2;
}

export const setArquetipo = (arquetipo, valor) =>{
    console.log(arquetipo, valor)
    arquetipos[arquetipo] += valor;
} 
