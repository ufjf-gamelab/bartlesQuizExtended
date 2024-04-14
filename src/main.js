import { getPerguntas } from "./PerguntasData.js";
import {CriaPergunta, calcularPorcentagem} from "./pergunta.js";
import { MostrarPorcentagens } from "./tela.js";
import {AtualizaTela} from "./tela.js";

let perguntas = getPerguntas();
let perguntaAtual = 0;
porPerguntaTela()

function porPerguntaTela(){
    let pergunta = perguntas[perguntaAtual];
    AtualizaTela(pergunta);
}
//funçao chamada pelo clique do botao no pergunta.js
export function passarPergunta(){
    const qntPerguntas = perguntas.length;
    if ( perguntaAtual == qntPerguntas - 1){
        const porcentagem = calcularPorcentagem();
        MostrarPorcentagens(porcentagem)
        return;
    }else{
        let progess = document.querySelector("#progress")
        progess.value += 1
        perguntaAtual++;
        porPerguntaTela()
    }
   
}


