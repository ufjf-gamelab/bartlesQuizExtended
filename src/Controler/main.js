import { getPerguntas } from "../Model/PerguntasData.js";
import { Swipper } from "../View/ResultadoSwipper.js";
import {CriaPergunta, calcularResultado} from "./pergunta.js";
import {CriaPergunta } from "../View/CriaPerguta.js";

let perguntas = getPerguntas();
let perguntaAtual = 0;
porPerguntaTela()

function porPerguntaTela(){
    let pergunta = perguntas[perguntaAtual];
    CriaPergunta(pergunta);
}
export function passarPergunta(){
    const qntPerguntas = perguntas.length;
    if ( perguntaAtual == qntPerguntas - 1){
        const porcentagem = calcularResultado();
        Swipper(porcentagem)
        return;
    }else{
        let progess = document.querySelector("#progress")
        progess.value += 1
        perguntaAtual++;
        porPerguntaTela()
    }
   
}
start()