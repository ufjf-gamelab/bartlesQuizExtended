export function AtualizaTela(Pergunta) {
    let Resposta1Ctn = document.querySelector("#RespostaA");
    let Resposta2Ctn = document.querySelector("#RespostaB");
    let PerguntaCtn= document.querySelector("#Pergunta");

    const PerguntaTxt = Pergunta.pergunta
    const perguntaATxt = Pergunta.resposta1
    const perguntaBTxt = Pergunta.resposta2

    PerguntaCtn.textContent = PerguntaTxt;
    Resposta1Ctn.textContent = perguntaATxt;
    Resposta2Ctn.textContent = perguntaBTxt;

    Resposta1Ctn.onclick = Pergunta.cliqueReposta1;
    Resposta2Ctn.onclick = Pergunta.cliqueReposta2;
}
export function MostrarTipo(tipo) {
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
    let h1 = document.createElement("h1")
    h1.innerHTML = "Você é " + tipo;
    let botao = document.createElement("button")
    botao.textContent = "Faça o teste novamente"
    botao.onclick = function(){
        window.location.reload();
    }
    resultado.appendChild(h1);
    resultado.appendChild(botao);    
   
}