import { passarPergunta } from "./main.js";

let arquetipo = {
    killer: 0,
    achivier: 0,
    socializer: 0,
    explorer: 0
}

export function CalculaArquetipo(){
    let tipo = "";

   
    if( arquetipo.killer > arquetipo.achivier && arquetipo.killer > arquetipo.socializer && arquetipo.killer > arquetipo.explorer){
        tipo = "Killer";
    }
    if( arquetipo.achivier > arquetipo.killer && arquetipo.achivier > arquetipo.socializer && arquetipo.achivier > arquetipo.explorer){
        tipo = "Achivier";
    }
    if( arquetipo.socializer > arquetipo.killer && arquetipo.socializer > arquetipo.achivier && arquetipo.socializer > arquetipo.explorer){
        tipo = "Socializer";
    }
    if( arquetipo.explorer > arquetipo.killer && arquetipo.explorer > arquetipo.achivier && arquetipo.explorer > arquetipo.socializer){ 
        tipo     = "Explorer";
    }
 

    return tipo;
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

