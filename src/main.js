import {CriaPergunta, CalculaArquetipo} from "./pergunta.js";
import { MostrarTipo } from "./tela.js";
import {AtualizaTela} from "./tela.js";
let perguntas= [
    CriaPergunta("Você se sente mais à vontade, como jogador em um jogo online?", 
                 "Conversando com amigos em uma taverna","socializer",
                 "Caçando orcs sozinho em busca de experiência","achivier"),
    CriaPergunta("O que você curte mais em missões?", 
                 "Se envolver na história","socializer",
                 "Obter as recompensas no final","achivier"),
    CriaPergunta("Pelo que você preferiria ser reconhecido em um jogo online?", 
                 "Seu equipamento","achivier",
                 "Sua personalidade","socializer"),
    CriaPergunta("O que você preferiria ter como jogador em um jogo online?",
                 "Um canal privado, no qual você e seus amigos podem se comunicar","socializer",
                 "Sua própria casa, valendo milhões de moedas de ouro","achivier"),
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
        const tipo = CalculaArquetipo();
        MostrarTipo(tipo)
        return;
    }else{
        perguntaAtual++;
        porPerguntaTela()
    }
   
}


