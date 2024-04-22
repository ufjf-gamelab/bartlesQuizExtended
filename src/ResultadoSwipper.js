import { getDesc } from "./DescriçõesData.js";
import { Barras } from "./ResultadoBarras.js";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

export function Swipper(Resultado) {

    
    let resultadoCtn = document.querySelector("#resultado");
    resultadoCtn.innerHTML = "";

    resultadoCtn.style.display = "flex";
    resultadoCtn.style.flexDirection = "column";
    resultadoCtn.style.justifyContent = "space-around";
    resultadoCtn.style.alignItems = "center";
    resultadoCtn.style.gap = "0";
    let h1 = document.createElement("h2")
    h1.innerHTML = "Seu arquetipo de jogador:" ;

    
    const arquetipos =[ Resultado.killer,Resultado.achiever,Resultado.socializer,Resultado.explorer]
    function compararPorIdade(a, b) {
        return a.porcetagem - b.porcetagem;
    }
    arquetipos.sort(compararPorIdade);
    arquetipos.reverse();



    let swiperctn = document.createElement("div")
    swiperctn.classList.add('swiper')
    swiperctn.style.zIndex = "100"
    swiperctn.style.width="100%"
    swiperctn.style.height="auto"

    let wrapper = document.createElement("div")
    wrapper.style.width = "100%"
    wrapper.style.height = "100%"
    wrapper.classList.add('swiper-wrapper')
   
    for (let i = 0; i < 4; i++) {
        let div  = document.createElement('div')
      
        div.classList.add("swiper-slide")
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.justifyContent = "space-around"
        div.style.alignItems = "center"
        div.style.gap = "10px"


        let titulo = document.createElement("h2")
        titulo.style.fontFamily = "vt323"
        titulo.textContent = arquetipos[i].porcetagem.toFixed(1) + "% " +arquetipos[i].nome
        titulo.style.textAlign = "center"
        titulo.style.fontSize = "15px"
        titulo.style.width = "50%"
        titulo.style.border = "5px solid black"

        let img = document.createElement("img")
        console.log(getDesc(), arquetipos[i].nome)
        img.src = getDesc()[arquetipos[i].nome].img
        img.style.width = "80px"
        img.style.height = "80px"
        img.style.padding = "20px"
        img.style.borderRadius = "10px"
        img.style.border = "5px solid black"
        
        let h3 = document.createElement("h3")
        h3.textContent = getDesc()[arquetipos[i].nome].descrição
        h3.style.textAlign = "center"
        h3.style.width = "60%"
        h3.style.fontSize = "15px"
        h3.style.fontFamily = "vt323"
        h3.style.marginBottom = "40px"
        div.appendChild(titulo)
        div.appendChild(img)
        div.appendChild(h3)

        wrapper.appendChild(div)
    }
    swiperctn.appendChild(wrapper)
   
    let div = document.createElement("div")
    div.classList.add('swiper-pagination')
    swiperctn.appendChild(div)
 
   
    const sec2 = document.createElement("section");
    const  botao = document.createElement("button")
    botao.textContent = "mostrar em barras"
    botao.onclick = function(){
        Barras(Resultado)
    }
    const  botao2 = document.createElement("button")
    botao2.textContent = "Faça o teste novamente"
    botao2.onclick = function(){
        window.location.reload();
    }
    botao.style.minHeight = "70px"   
    botao2.style.minHeight = "70px"
    resultadoCtn.appendChild(h1);
    resultadoCtn.appendChild(swiperctn);
    sec2.appendChild(botao2);    
    sec2.appendChild(botao); 
    resultadoCtn.appendChild(sec2);
  

    const swiper = new  Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}