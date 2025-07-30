const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Poderes (ou habilidades sobrenaturais, superpoderes, etc.) referem-se a capacidades especiais ou extraordinárias que um personagem possui e que vão além das limitações humanas normais. O que você acha de um ser humano ter superpoderes?",
        alternativas: [
            {
               texto: "Acho super legal!", 
               afirmacao: "Pelo visto você é o tipo de pessoa que gosta bastante de coisas relacionadas a superpoderes."
            },
            {
                texto: "Acho muito estranho!",
                afirmacao: "Você não costuma acreditar muito nessas ficções que costumam inventar sobre poderes. "
            }
            
        ]
    },

    {
        enunciado: "Se você pudesse ter algum tipo de poder, qual desses você escolheria?",
        alternativas: [
            {
                texto: "Ter o poder de ser invisível",
                afirmacao: "Entre ter um superpoder de voar e ser invisível você prefere ser invisível. Agora imagina o quão legal deve ser ir para qualquer lugar e absolutamente ninguém te ver!"
            },
            {
                texto: "Ter o poder de voar",
                afirmacao: " Entre ter um superpoder de voar e ser invisível você prefere voar. Deve ser muito incrível poder voar por qualquer lugar e o quão alto for não é."
            }
           
        ]
    },

    {
        enunciado: "Uma pessoa que pudesse voltar no tempo seria alguém com a capacidade de se deslocar para momentos anteriores no tempo, alterando eventos passados ou simplesmente observando-os novamente. Se você tivesse o poder de volta no tempo, o que você faria?",
        alternativas: [
            {
                texto: "Refazer ou consertar alguma coisa que fez no passado",
                 afirmacao: " Pelo visto tem algo muito importante que você queira consertar no passado, e com o poder de voltar no tempo você irá conseguir."
            },
            {
                texto: " Ir para o passado só para ver alguém que se foi ou que ama:",
                afirmacao: "Com o poder de voltar no tempo você vai conseguir ver a pessoa que já se foi e que ama muito."
            }
            

        ]
    },

    {
        enunciado: "Desses filmes de super poderes, qual personagem você escolheria para ser?",
        alternativas: [
            {
                texto:   "Homem Aranha:",
                afirmacao: "Além de ter vários poderes você ainda seria o homem aranha, o cara que tem a capacidade de se agarrar às paredes, força sobre-humana, um sexto sentido que o alerta do perigo, equilíbrio perfeito, velocidade e agilidade sobre-humanas"
            },
            {
                texto: "Capitão América:",
                afirmacao: "Você teria muitas habilidades: Um dos melhores lutadores do mundo, um homem que conhece inúmeras técnicas de combate corpo-a-corpo, mesmo se não tem superpoderes. Porém, graças ao soro do Supersoldado, é dono de força, agilidade, resistência, reflexos e capacidade de cura superiores aos dos seres humanos normais."
            }
            
            
        ]
    },

    {
        enunciado: "Os X-Men e os Vingadores são equipes de super-heróis da Marvel Comics, mas diferem em suas origens, abordagens e foco. Entre essas duas equipes, qual escolheria?",
        alternativas: [
            {
                texto:  " Os X-Men",
                afirmacao: "Você seria da equipe de Mutantes, seres humanos nascidos com habilidades sobre-humanas devido a uma mutação genética.Lutar pela aceitação e direitos dos mutantes, enquanto protegem o mundo de ameaças mutantes e humanas"
            },
            {
                texto: "Os Vingadores",
                afirmacao: "Você seria da equipe de Heróis de diferentes origens, incluindo humanos com tecnologia avançada, deuses, e seres com habilidades sobre-humanas. Que reúnem-se para responder a emergências, trabalhando juntos para derrotar vilões poderosos."
            }
            
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas (){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();