import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { getDesc } from '../Model/DescriçõesData.js';
export function CriaPergunta(Pergunta) {
    let Resposta1Ctn = document.querySelector("#RespostaA");
    let Resposta2Ctn = document.querySelector("#RespostaB");
    let PerguntaCtn = document.querySelector("#Pergunta");

    const PerguntaTxt = Pergunta.pergunta;
    const perguntaATxt = Pergunta.resposta1;
    const perguntaBTxt = Pergunta.resposta2;

    PerguntaCtn.textContent = PerguntaTxt;
    Resposta1Ctn.textContent = perguntaATxt;
    Resposta2Ctn.textContent = perguntaBTxt;

    Resposta1Ctn.onclick = Pergunta.cliqueReposta1;
    Resposta2Ctn.onclick = Pergunta.cliqueReposta2;
}

