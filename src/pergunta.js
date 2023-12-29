import { passarPergunta } from "./main.js";

let arquetipo = {
    killer: 0,
    achivier: 0,
    socializer: 0,
    explorer: 0
}

export function CalculaArquetipo(){
    let maior = 0;
    let arquetipo = "";
    for (let chave in arquetipo){
        if (arquetipo[chave] > maior){
            maior = arquetipo[chave];
            arquetipo = chave;
        }
    }
    return arquetipo;
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

