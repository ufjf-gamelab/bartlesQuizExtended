let arquetipo = {
    killer: 0,
    achivier: 0,
    socializer: 0,
    explorer: 0
}


function CriaPergunta(Pergunta, textoResposta1,Opcao1,textoResposta2, Opcao2){
    let pergunta = {
        Pergunta: Pergunta,
        Resposta1: [textoResposta1,Opcao1],
        Resposta2: [textoResposta2,Opcao2],
        cliqueReposta1: function(){
            arquetipo[Opcao1]++;
        },
        cliqueReposta2: function(){
            arquetipo[Opcao2]++;
        }
    }
    return pergunta;

}

