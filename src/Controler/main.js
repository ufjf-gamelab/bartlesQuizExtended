import { getPerguntas } from "../Model/PerguntasData.js";
import { MontarResultadoSwipper } from "../View/ResultadoSwipper.js";
import { calcularResultado} from "./arquetipos.js";
import {AtualizaTelaPerguntas} from "../View/AtulizaTelaPerguntas.js"
import {setArquetipo} from "./arquetipos.js"
let perguntas = getPerguntas();
let perguntaAtual = 0;
AtualizaTelaPerguntas(perguntas[perguntaAtual])


export function passarPergunta(){
    const qntPerguntas = perguntas.length;
    if ( perguntaAtual == qntPerguntas - 1){
        const porcentagem = calcularResultado();
        MontarResultadoSwipper(porcentagem)
        return;
    }else{
        let progess = document.querySelector("#progress")
        progess.value += 1
        perguntaAtual++;
        AtualizaTelaPerguntas(perguntas[perguntaAtual])
    }
   
}
export function CriaPergunta(Pergunta, textoResposta1,Opcao1,textoResposta2, Opcao2){
    let pergunta = {
        pergunta: Pergunta,
        resposta1: textoResposta1,
        resposta2: textoResposta2,
        respondida:false,
        cliqueReposta1: function(){
            setArquetipo(Opcao1,1)
            this.respondida = true;
            passarPergunta()
        },
        cliqueReposta2: function(){
            setArquetipo(Opcao1,1)
            this.respondida = true;
            passarPergunta()

        }
    }
    return pergunta;
}