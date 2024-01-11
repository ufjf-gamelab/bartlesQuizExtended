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
export function MostrarPorcentagens(porcentagens) {
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    resultado.style.display = "flex";
    resultado.style.flexDirection = "column";
    resultado.style.justifyContent = "space-around";
    resultado.style.alignItems = "center";

    let h1 = document.createElement("h2")
    h1.innerHTML = "Seu arquetipo de jogador:" ;

    let sec = document.createElement("section")
    sec.style.display = "flex"
    sec.style.flexDirection = "column"
    sec.style.justifyContent = "space-around"
    sec.style.alignItems = "center"
    
    const tipos = ["Killer   ","Achiever","Socializer","Explorer"]
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
        spamText.textContent = tipos[i]
        const spamText2 = document.createElement("span")
        spamText2.textContent = porcentagens[i].toFixed(1)+"%"

        spam.appendChild(spamText)
        spam.appendChild(spamText2)
         //"tipos[i]+" "+porcentagens[i].toFixed(1)+"%"
        progress.value = porcentagens[i]
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
    resultado.appendChild(h1);
    

    resultado.appendChild(sec);
    resultado.appendChild(botao);    
   
}