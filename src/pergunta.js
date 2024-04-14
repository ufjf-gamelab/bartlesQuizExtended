import { passarPergunta } from "./main.js";

let arquetipo = {
    killer: 0,
    achiever: 0,
    socializer: 0,
    explorer: 0,

    killer8D: 0,
    achiever8D: 0,
    socializer8D: 0,
    explorer8D: 0,
    
}

export function calcularResultado(){
    const killer8D = arquetipo.killer8D
    const achiever8D = arquetipo.achiever8D
    const socializer8D = arquetipo.socializer8D
    const explorer8D = arquetipo.explorer8D
    const tamanho=arquetipo.killer+arquetipo.achiever+arquetipo.socializer+arquetipo.explorer

    const porcentagemk = ((arquetipo['killer']/tamanho)*100)
    const porcentagema = ((arquetipo['achiever']/tamanho)*100)
    const porcentagems = ((arquetipo['socializer']/tamanho)*100)
    const porcentageme = ((arquetipo['explorer']/tamanho)*100)

   
    const nomesImplicitos = ['Planner','Scientist','Network','Politician']
    const nomesExplicitos = ['Opportunist','Hacker','Friend','Griefer']
    const nomes = [nomesImplicitos,nomesExplicitos]
    
    
    const resultado= {
        killer: {
                    porcetagem: porcentagemk,
                    ImplicitoExplicito: killer8D,
                    nome: nomes[killer8D][3]
                },
        achiever: {
                    porcetagem: porcentagema,
                    ImplicitoExplicito: achiever8D,
                    nome: nomes[achiever8D][0]
                },
        socializer: {
                    porcetagem: porcentagems,
                    ImplicitoExplicito: socializer8D,
                    nome: nomes[socializer8D][2]
                },
        explorer: {
                    porcetagem: porcentageme,
                    ImplicitoExplicito: explorer8D,
                    nome: nomes[explorer8D][1]
                },
    }
    return resultado;
}

export function CriaPergunta(Pergunta, textoResposta1,Opcao1,textoResposta2, Opcao2){
    let pergunta = {
        pergunta: Pergunta,
        resposta1: textoResposta1,
        resposta2: textoResposta2,

        respondida:false,
        cliqueReposta1: function(){
            arquetipo[Opcao1]++;
            this.respondida = true;
            passarPergunta()
        },
        cliqueReposta2: function(){
            arquetipo[Opcao2]++;
            this.respondida = true;
            passarPergunta()

        }
    }
    return pergunta;
}

