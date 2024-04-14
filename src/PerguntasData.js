import {CriaPergunta} from "./pergunta.js";

let perguntas= [
    CriaPergunta("Como jogador, você se sente mais à vontade em um jogo online:", 
                 "Conversando com amigos em uma taverna","socializer",
                 "Caçando orcs sozinho em busca de experiência(xp)","achiever"
                ),
                
    CriaPergunta("O que é mais prazeroso pra você?",
                 "Matar um monstro grande","archiver",
                 "Se gabar sobre isso para seus amigos","socializer",
                ),
                            
    CriaPergunta("O que você curte mais em missões?", 
                 "Se envolver na história","socializer",
                 "Obter as recompensas no final","achiever"
                ),

    CriaPergunta("Pelo que você preferiria ser reconhecido em um jogo online?", 
                 "Seu equipamento","achiever",
                 "Sua personalidade","socializer"
                ),

    CriaPergunta("Você preferiria ser:",
                 "Popular","socializer",
                 "Rico","archiver",
                ),

    CriaPergunta("O que você mais gosta em um jogo online?",
                 "Descobrir a ultima fofoca","socializer",
                 "Conseguir um item novo","archiver",
                ),

    CriaPergunta("O que você preferiria ter, como jogador em um jogo online?",
                 "Um canal privado, no qual você e seus amigos podem se comunicar","socializer",
                 "Sua própria casa, valendo milhões de moedas de ouro","achiever"
                ),

    CriaPergunta("O que você aproveitaria mais como jogador de um jogo online?",
                 "Administrar sua própria taverna","socializer",
                 "Criar seus próprios mapas do mundo e depois vendê-los","explorer"
                ),

    CriaPergunta("O que é mais importante em um jogo online para você?",
                 "O número de pessoas","socializer",
                 "O número de áreas para explorar","explorer"
                ),

    CriaPergunta("O que é mais importante para você?",
                 "A qualidade do roleplay(atuação) em um RPG(jogo de interpretação) online","socializer",
                 "A singularidade das características e mecânicas do jogo","explorer"
                ),

    CriaPergunta("Você está sendo perseguido por um monstro em um jogo online. O que você faz?",
                 "Pede ajuda a um amigo para poder matar o monstro","socializer",
                 "Se esconde em um local onde o monstro não irá te achar","explorer",
                ),

    CriaPergunta("Você é um jogador em um jogo online e quer lutar contra um dragão muito forte. Como você abordaria esse problema?",
                 "Reunir um grande grupo de jogadores para matá-lo","socializer",
                 "Experimentar uma variedade de armas e magias contra ele até encontrar sua fraqueza","explorer"
                ),

    CriaPergunta("Você é um jogador em um jogo online e prestes a entrar em uma dungeon(masmorra) desconhecida. Você pode escolher mais uma pessoa para se unir ao seu grupo. Você escolhe:", 
                 "Um bardo, que é um bom amigo seu e é ótimo para entreter você e seus amigos","socializer", 
                 "Um mago, para identificar os itens que você encontrar no local", "explorer"
                ),

    CriaPergunta("É melhor ser:",
                 "Temido","killer",
                 "Amado","socializer"
                ),

    CriaPergunta("Alguém fez PK(te matou em um combate jogador contra jogador) com você. Você vai:",
                 "Descobrir o porquê e tentar convencê-lo a não fazer isso novamente","socializer",
                 "Planejar sua vingança","killer"
                ),

    CriaPergunta("O que é mais emocionante?",
                 "Um cena bem interpretada(entre dois ou mais jogadores, podendo um deles ser você)","socializer",
                 "Uma batalha mortal","killer"
                ),

    CriaPergunta("O que você aproveitaria mais?",
                 "Ganhar um duelo junto de outro jogador","killer",
                 "Ser aceito por um clã (um grupo de outros jogadores)","socializer"
                ),

    CriaPergunta("Você preferiria:",
                 "Derrotar seus inimigos","killer",
                 "Convercer seus inimigos a trabalharem para você, não contra você","socializer",
                ),

    CriaPergunta("O que é pior?",
                 "Ficar sem poder","killer",
                 "Ficar sem amigos","socializer",
                ),

    CriaPergunta("Você preferiria:",
                 "Ouvir o que alguém tem a dizer","socializer",
                 "Mostrar a eles a lâmina afiada do seu machado","killer"
                ),

    CriaPergunta("Em um jogo online, uma nova área é aberta. O que você esta mais ansioso por   ?",
                 "Explorar a nova área e descobrir sua história","explorer",
                 "Ser o primeiro a obter os novos equipamentos da área","achiever"
                ),

    CriaPergunta("Em um jogo online, gostaria de ser conhecido como:",
                 "Alguém que pode se locomover de quaisquer dois pontos no mundo e conhece realmente o terreno","explorer",
                 "A pessoa com os melhores e mais únicos equipamentos no jogo","achiever"
                ),

    CriaPergunta("Você preferiria:",
                 "Tornar-se um herói mais rápido do que seus amigos","achiever",
                 "Saber mais segredos do que seus amigos","explorer"
                ),

    CriaPergunta("Você preferiria:",
                 "Saber onde encontrar as coisas","achiever",
                 "Saber como obter as coisas","explorer"
                ),

    CriaPergunta("O que você preferiria fazer:",
                 "Resolver um enigma que mais ninguém resolveu","explorer",
                 "Chegar a um certo nível de experiência(xp) mais rápido do que qualquer outra pessoa","achiever"
                ),

    CriaPergunta("Você costuma:",
                 "Saber coisas que mais ninguém sabe","explorer",
                 "Ter itens que mais ninguém tem","archiver",
                ),

    CriaPergunta("Em um jogo online, você preferiria se juntar a um clã de:",
                 "Acadêmicos","explorer",
                 "Assassinos","killer"
                ),

    CriaPergunta("Você preferiria ganhar:",
                 "Uma competição de trívia(quiz sobre conhecimentos)","explorer",
                 "Uma batalha na arena","killer"
                ),

    CriaPergunta("Se você está sozinho em uma área, você acha que:",
                 "É seguro explorar","explorer",
                 "Terá que procurar em outro lugar por presas","killer"
                ),

    CriaPergunta("Em um jogo online, você prefere ser conhecido por seu:",
                 "Conhecimento","explorer",
                 "Poder","killer",
                ),

    CriaPergunta("Você preferiria:",
                 "Derrotar um inimigo","killer",
                 "Explorar uma nova área","explorer",
                ),

    CriaPergunta("Você descobre que outro jogador está planejando sua queda. Você:",
                 "Vai para uma área que seu oponente não conhece bem e se prepara para embosca-lo","explorer",
                 "Ataca-o antes que ele te ataque","killer"
                ),

    CriaPergunta("Você conhece um novo jogador. Você ox vê como:",
                 "Alguém que pode apreciar seu conhecimento sobre jogo","explorer",
                 "Como uma presa em potencial","killer"
                ),

    CriaPergunta("Em um jogo online, você preferiria:",
                 "Ter uma espada duas vezes mais poderosa do que qualquer outra no jogo","achiever",
                 "Ser a pessoa mais temida no jogo","killer"
                ),

    CriaPergunta("Em um jogo online, você seria mais propenso a se gabar de:",
                 "Quantos outros jogadores você matou","killer",
                 "Seu equipamento","achiever"
                ),

    CriaPergunta("Você preferiria ter:",
                 "Um feitiço para machucar outros jogadores","killer",
                 "Um feitiço que aumenta a taxa com que você ganha pontos de experiência(xp)","achiever"
                ),

    CriaPergunta("Você preferiria ter:",
                 "Dois níveis de experiência(xp)","achiever",
                 "Um amuleto que aumenta o dano que você causa contra outros jogadores em 10%", "killer"
                ),

    CriaPergunta("Você preferiria receber como recompensa por uma missão:",
                 "Pontos de experiência(xp)","archiver",
                 "Uma varinha que contém 3 cargas de um feitiço que te permite controlar outros jogadores, contra a vontade deles","killer",
                ),

    CriaPergunta("Ao jogar um videogame, é mais divertido:",
                 "Ter a pontuação mais alta na lista(de maiores pontuações em alguma atividade do jogo)","achiever",
                 "Vencer seu melhor amigo em uma luta um contra um", "killer"
                ),

                 //perguntas 8d
    CriaPergunta("Ao iniciar um jogo, qual seu objetivo:",
                 "Você define um objetivo e planeja como alcança-lo","",
                 "Você procura o que fazer, mas sem ter um objetivo em mente até encontrar algo que te interesse","Achievers8D",
                ),

    CriaPergunta("Durante um jogo, como você costuma adquirir conhecimento?",
                 "Busco adquiri-lo de forma metódica"," ",
                 "Costumo entender o jogo intuitivamente, sem precisar testar minhas ideias acerca dele","explorer8D",
                ),

    CriaPergunta("Acerca de outro jogador:",
                 "Você avalia as capacidades dele"," ",
                 "Você gosta de sua companhia","socializer8D",
                ),

    CriaPergunta("Em um jogo online, você prefere:",
                 "Ter uma reputação boa"," ",
                 "Ter uma GRANDE reputação ruim,por exemplo: atrapalhando outros players","killer8D",
                ),
]
export function getPerguntas(){
    return perguntas;
}   