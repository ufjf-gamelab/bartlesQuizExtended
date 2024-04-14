export function AtualizaTela(Pergunta) {
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
export function MostrarResultado(Resultado) {

    
    let resultadoCtn = document.querySelector("#resultado");
    resultadoCtn.innerHTML = "";

    resultadoCtn.style.display = "flex";
    resultadoCtn.style.flexDirection = "column";
    resultadoCtn.style.justifyContent = "space-around";
    resultadoCtn.style.alignItems = "center";

    let h1 = document.createElement("h2")
    h1.innerHTML = "Seu arquetipo de jogador:" ;

    let sec = document.createElement("section")
    sec.style.display = "flex"
    sec.style.flexDirection = "column"
    sec.style.justifyContent = "space-around"
    sec.style.alignItems = "center"
    
    const arquetipos =[ Resultado.killer,Resultado.achiever,Resultado.socializer,Resultado.explorer]
    function compararPorIdade(a, b) {
        return a.porcetagem - b.porcetagem;
    }
    arquetipos.sort(compararPorIdade);
    arquetipos.reverse();
    for (let i = 0; i < 4; i++) {

        let div = document.createElement("div")
        div.style.width = "100%"
        div.style.display = "flex"
        div.style.flexDirection = "row"
        div.style.justifyContent = "space-around"
        div.style.alignItems = "flex=start"
        div.style.gap="5px"
        const progress = document.createElement("progress")
        const spam = document.createElement("span")
        spam.style.width = "150px"


        const spamText = document.createElement("span")
        console.log(arquetipos)
        spamText.textContent = arquetipos[i].nome

        const spamText2 = document.createElement("span")
        console.log(arquetipos[i])
        spamText2.textContent =arquetipos[i].porcetagem.toFixed(1)+"%"

        spam.appendChild(spamText)
        spam.appendChild(spamText2)
         //"tipos[i]+" "+porcentagens[i].toFixed(1)+"%"
        progress.value =arquetipos[i].porcetagem
        progress.max = 100
        div.appendChild(progress)
        div.appendChild(spam)

        sec.appendChild(div)


    }
   
   

    const  botao = document.createElement("button")
    botao.textContent = "Faça o teste novamente"
    botao.onclick = function(){
        window.location.reload();
    }
    resultadoCtn.appendChild(h1);
    

    resultadoCtn.appendChild(sec);
    resultadoCtn.appendChild(botao);    
   
}