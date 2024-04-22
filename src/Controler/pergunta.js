import { passarPergunta } from "./main.js";

let arquertipos = {
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
    const tamanho = arquertipos.achiever + arquertipos.explorer + arquertipos.socializer + arquertipos.killer 
    const resultado2 = {}

    for (let i = 0; i < keys.length; i++) {
        const arquetipo = arquertipos[keys[i]] 
        const ImplicitoExplicito = arquertipos[keys[i]+'8D']
        const nome2 = nomeArquetipo8D(ImplicitoExplicito,i)
        const porcentagem = (arquetipo/tamanho)*100
        resultado2[keys[i]] ={
            porcetagem: porcentagem,
            ImplicitoExplicito: ImplicitoExplicito,
            nome: nome2
        }
    }
    console.log(resultado2)
    return resultado2;
}

export function CriaPergunta(Pergunta, textoResposta1,Opcao1,textoResposta2, Opcao2){
    let pergunta = {
        pergunta: Pergunta,
        resposta1: textoResposta1,
        resposta2: textoResposta2,
        respondida:false,
        cliqueReposta1: function(){
            arquertipos[Opcao1]++;
            this.respondida = true;
            passarPergunta()
        },
        cliqueReposta2: function(){
            arquertipos[Opcao2]++;
            this.respondida = true;
            passarPergunta()

        }
    }
    return pergunta;
}

