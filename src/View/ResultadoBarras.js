import {MontarResultadoSwipper} from './ResultadoSwipper.js'

function criaContainer(){
    let resultadoCtn = document.querySelector("#resultado");
    resultadoCtn.innerHTML = "";
    resultadoCtn.style.display = "flex";
    resultadoCtn.style.flexDirection = "column";
    resultadoCtn.style.justifyContent = "space-around";
    resultadoCtn.style.alignItems = "center";
    let h1 = document.createElement("h2")
    h1.innerHTML = "Seu arquetipo de jogador:" ;
    resultadoCtn.appendChild(h1);
    return resultadoCtn
}
function criarSectionSuperior(){
    let sec = document.createElement("section")
    sec.style.display = "flex"
    sec.style.flexDirection = "column"
    sec.style.alignItems = "center"
    sec.style.height = "373px"
    return sec
}
function criarSectionInferior(Resultado){
    const sec2 = document.createElement("section");
    const  botao = document.createElement("button")
    botao.textContent = "mostrar Swipper"
    botao.onclick = function(){
        console.log(Resultado)
        MontarResultadoSwipper(Resultado)
    }
    const  botao2 = document.createElement("button")
    botao2.textContent = "Faça o teste novamente"
    botao2.onclick = function(){
        window.location.reload();
    }
    botao.style.minHeight = "70px"   
    botao2.style.minHeight = "70px"
    sec2.appendChild(botao2);    
    sec2.appendChild(botao); 
    return sec2
}
function sortArquetipos(Resultado){
    const arquetipos =[ Resultado.killer,Resultado.achiever,Resultado.socializer,Resultado.explorer]
    function compararPorIdade(a, b) {return a.porcetagem - b.porcetagem;}
    arquetipos.sort(compararPorIdade);
    arquetipos.reverse();
    return arquetipos
}
function criaBarra(arquetipo){

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
    spamText.textContent = arquetipo.nome

    const spamText2 = document.createElement("span")
    spamText2.textContent =arquetipo.porcetagem.toFixed(1)+"%"

    spam.appendChild(spamText)
    spam.appendChild(spamText2)
     //"tipos[i]+" "+porcentagens[i].toFixed(1)+"%"
    progress.value =arquetipo.porcetagem
    progress.max = 100
    div.appendChild(progress)
    div.appendChild(spam)
    return div
}
export function MontarResultadoBarras(Resultado) {

    const resultadoCtn = criaContainer()
    const  sectionInferior = criarSectionInferior(Resultado);
    const  sectionSuperior = criarSectionSuperior();
    resultadoCtn.appendChild(sectionSuperior);
    resultadoCtn.appendChild(sectionInferior);  

    const  arquetipos = sortArquetipos(Resultado);

    for (let i = 0; i < 4; i++) {
        const Barra = criaBarra(arquetipos[i]);
        sectionSuperior.appendChild(Barra)
    }
}