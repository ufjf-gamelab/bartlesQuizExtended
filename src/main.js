import {CriaPergunta, calcularPorcentagem} from "./pergunta.js";
import { MostrarPorcentagens } from "./tela.js";
import {AtualizaTela} from "./tela.js";
let perguntas= [
    CriaPergunta("Você se sente mais à vontade, como jogador em um jogo online?", 
                 "Conversando com amigos em uma taverna","socializer",
                 "Caçando orcs sozinho em busca de experiência","achiever"),
    CriaPergunta("O que você curte mais em missões?", 
                 "Se envolver na história","socializer",
                 "Obter as recompensas no final","achiever"),
    CriaPergunta("Pelo que você preferiria ser reconhecido em um jogo online?", 
                 "Seu equipamento","achiever",
                 "Sua personalidade","socializer"),
    CriaPergunta("O que você preferiria ter como jogador em um jogo online?",
                 "Um canal privado, no qual você e seus amigos podem se comunicar","socializer",
                 "Sua própria casa, valendo milhões de moedas de ouro","achiever"),
    CriaPergunta("O que você aproveitaria mais como jogador de um jogo online?",
                 "Administrar sua própria taverna","socializer",
                 "Criar seus próprios mapas do mundo e depois vendê-los","explorer"),
    CriaPergunta("O que é mais importante em um jogo online para você?",
                 "O número de pessoas","socializer",
                 " O número de áreas para explorar","explorer"),            
    CriaPergunta("O que é mais importante para você?",
                 "A qualidade do roleplay em um jogo online","socializer",
                 " A singularidade das características e mecânicas do jogo","explorer"),
    CriaPergunta("Você é um jogador em um jogo online e quer lutar contra um dragão realmente difícil. Como você abordaria esse problema?",
                 "Reunir um grande grupo de jogadores para matá-lo","socializer",
                 "Experimentar uma variedade de armas e magias contra ele até encontrar sua fraqueza","explorer"),
    CriaPergunta("Você é um jogador em um jogo online e prestes a entrar em um calabouço desconhecido. Você tem a escolha de mais uma pessoa para o seu grupo. Você traz:", 
                 "Um bardo, que é um bom amigo seu e é ótimo para entreter você e seus amigos","socializer", 
                 "Um mago, para identificar os itens que você encontra lá", "explorer"),
    CriaPergunta("Alguém te PK'ou (te matou em combate jogador contra jogador). Você quer:",
                 "Descobrir por que e tentar convencê-los a não fazer isso novamente","socializer",
                 "Planejar sua vingança","killer"),
    CriaPergunta("O que é mais emocionante?",
                 "Um cenário bem interpretado","socializer",
                 "Uma batalha mortal","killer"),
    CriaPergunta("O que você aproveitaria mais?",
                 "Ganhar um duelo com outro jogador","killer",
                 "Ser aceito por um clã (um grupo de outros jogadores)","socializer"),
    CriaPergunta("É melhor ser:",
                 "Temido","killer",
                 "Amado","socializer"),
    CriaPergunta("Você preferiria:",
                 "Ouvir o que alguém tem a dizer","socializer",
                 "Mostrar a lâmina afiada do seu machado","killer"),
    CriaPergunta("Em um jogo online, uma nova área é aberta. O que você espera mais?",
                 "Explorar a nova área e descobrir sua história","explorer",
                 "Ser o primeiro a obter os novos equipamentos da área","achiever"),
    CriaPergunta("Em um jogo online, gostaria de ser conhecido como:",
                 "Alguém que pode se locomover de quaisquer dois pontos no mundo e conhece realmente o terreno","explorer",
                 "A pessoa com os melhores e mais únicos equipamentos no jogo","achiever"),
    CriaPergunta("Você preferiria:",
                 "Tornar-se um herói mais rápido do que seus amigos","achiever",
                 "Saber mais segredos do que seus amigos","explorer"),
    CriaPergunta("Você preferiria:",
                 "Saber onde encontrar as coisas","achiever",
                 "Saber como obter as coisas?","explorer"),
    CriaPergunta("O que você preferiria fazer:",
                 "Resolver um enigma que mais ninguém resolveu","explorer",
                 "Chegar a um certo nível de experiência mais rápido do que qualquer outra pessoa?","achiever"),
    CriaPergunta("Em um jogo online, você preferiria se juntar a um clã de:",
                 "Acadêmicos","explorer",
                 "Assassinos","killer"),
    CriaPergunta("Você preferiria ganhar:",
                 "Uma competição de trívia","explorer",
                 "Uma batalha na arena?","killer"),
    CriaPergunta("Se você está sozinho em uma área, você acha que:",
                 "É seguro explorar","explorer",
                 "Terá que procurar em outro lugar por presas?","killer"),
    CriaPergunta("Você descobre que outro jogador está planejando sua queda. Você:",
                 "Vai para uma área desconhecida para o seu oponente e se prepara lá","explorer",
                 "Ataca-os antes que eles te ataquem?","killer"),
    CriaPergunta("Você conhece um novo jogador. Você os vê como:",
                 "Alguém que pode apreciar seu conhecimento do jogo","explorer",
                 "Como presa em potencial?","killer"),
    CriaPergunta("Em um jogo online, você preferiria:",
                "Ter uma espada duas vezes mais poderosa do que qualquer outra no jogo","achiever",
                "Ser a pessoa mais temida no jogo?","killer"),
    CriaPergunta("Em um jogo online, você seria mais propenso a se gabar de:",
                 "Quantos outros jogadores você matou","killer",
                 "Seu equipamento?","achiever"),
    CriaPergunta("Você preferiria ter:",
                "Um feitiço para prejudicar outros jogadores","killer",
                "Um feitiço que aumenta a taxa com que você ganha pontos de experiência?","achiever"),
    CriaPergunta("Você preferiria ter:",
                 "Dois níveis de experiência","achiever",
                 "Um amuleto que aumenta o dano que você causa contra outros jogadores em 10%?", "killer"),
    CriaPergunta("Ao jogar um videogame, é mais divertido:",
                 "Ter a pontuação mais alta na lista","achiever",
                 "Vencer seu melhor amigo um a um?", "killer")
                 

]



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


