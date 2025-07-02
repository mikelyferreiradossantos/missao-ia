const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Poderes (ou habilidades sobrenaturais, superpoderes, etc.) referem-se a capacidades especiais ou extraordinárias que um personagem possui e que vão além das limitações humanas normais. O que você acha de um ser humano ter superpoderes?",
        alternativas: [
            "Acho super legal!",
            "Acho muito estranho!"
        ]
    },

    {
        enunciado: "Se você pudesse ter algum tipo de poder, qual desses você escolheria?",
        alternativas: [
            "Ter o poder de ser invisível",
            "Ter o poder de voar"
        ]
    },

    {
        enunciado: "Uma pessoa que pudesse voltar no tempo seria alguém com a capacidade de se deslocar para momentos anteriores no tempo, alterando eventos passados ou simplesmente observando-os novamente. Se você tivesse o poder de volta no tempo, o que você faria?",
        alternativas: [
            "Refazer ou consertar alguma coisa que fez no passado:",
            " Ir para o passado só para ver alguém que se foi ou que ama:"
        ]
    },

    {
        enunciado: "Desses filmes de super poderes, qual personagem você escolheria para ser?",
        alternativas: [
            "Homem Aranha:",
            "Capitão América:"
        ]
    },

    {
        enunciado: "Os X-Men e os Vingadores são equipes de super-heróis da Marvel Comics, mas diferem em suas origens, abordagens e foco. Entre essas duas equipes, qual escolheria?",
        alternativas: [
            " Os X-Men",
            "Os Vingadores"
        ]
    }
];

let atual = 0;
let perguntaAtual;
function mostraPerguntas (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPerguntas();