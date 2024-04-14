import { passarPergunta } from "./main.js";

let arquetipo = {
    killer: 0,
    achiever: 0,
    socializer: 0,
    explorer: 0,
    Implicito: 0
}

export function calcularPorcentagem(){
    const tamanho=arquetipo.killer+arquetipo.achiever+arquetipo.socializer+arquetipo.explorer

    const porcentagemk = ((arquetipo['killer']/tamanho)*100)
    const porcentagema = ((arquetipo['achiever']/tamanho)*100)
    const porcentagems = ((arquetipo['socializer']/tamanho)*100)
    const porcentageme = ((arquetipo['explorer']/tamanho)*100)
    const array = [porcentagemk,porcentagema,porcentagems,porcentageme]
    return array;
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

