const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você é abordado por um estranho que menciona um ingrediente lendário. Como você reage?",
        alternativas: [
            {
             texto: "Aceitar o desafio e seguir o estranho",
                afirmacao: " Você decide seguir o estranho e se aventurar em busca do ingrediente lendário. "
            },
            {
                texto: "Ignorar e continuar com seus afazeres:",
                afirmacao: "Você decide não se envolver e seguir seu caminho normalmente."
            }
        ]
    },
    {
        enunciado: "Se escolheu Aceitar o desafio e seguir o estranho: Você encontra uma bifurcação no caminho. Qual direção você escolhe?",
        alternativas: [
            {
                texto: "Seguir o caminho iluminado e seguro:",
                afirmacao: "Opta por um caminho aparentemente mais seguro e bem-trilhado."
            },
            {
                texto: "Atravessar o caminho sombrio e misterioso: ",
                afirmacao: "Opta por um caminho desafiador e menos conhecido."
            }
        ]
    },
    {
        enunciado: "Se escolheu Seguir o caminho iluminado e seguro: Você se depara com um guardião misterioso. Como você procede?",
        alternativas: [
            {
                texto: "Tentar negociar pacificamente: ",
                afirmacao: "Você tenta convencer o guardião a deixá-lo passar sem conflitos.
            },
            {
                texto: "Desafiar o guardião para um duelo: ",
                afirmacao: "Você decide enfrentar o guardião em um confronto direto para continuar seu caminho."
            }
        ]
    },
    {
        enunciado: "Se escolheu Atravessar o caminho sombrio e misterioso: Você se depara com um enigma antigo. Como você resolve o enigma?",
        alternativas: [
            {
                texto: "Usar seu conhecimento sobre ingredientes raros: .",
                afirmacao: "Você usa seu conhecimento culinário para decifrar o enigma relacionado a ingredientes."
            },
            {
                texto: "Pedir ajuda ao estranho que mencionou o ingrediente lendário:",
                afirmacao: "Você decide procurar o estranho por ajuda para resolver o enigma."
            }
        ]
    },
    {
        enunciado: "Sobre o Enigma",
        alternativas: [
            {
                texto: "Se escolheu Usar seu conhecimento sobre ingredientes raros: ",
                afirmacao: "Você decifra o enigma e encontra uma pista crucial sobre a localização do ingrediente lendário."
            },
            {
                texto: "Se escolheu Pedir ajuda ao estranho que mencionou o ingrediente lendário: ",
                afirmacao: "O estranho revela informações valiosas que o ajudam a desvendar o mistério do ingrediente lendário, mas não ajuda em muita coisa"
            }
        ]
    },

     {
        enunciado: "Sobre o Guardião:",
        alternativas: [
            {
                texto: "Se você resolveu negociar pacificamente com o Guardião.,
                afirmacao: "Ele decide te dar o ingrediente lendário, que para você, um cozinheiro, não tem preço."
            },
            {
                texto: "Se você escolheu enfrenta-lo em um duelo.",
                afirmacao: "Você morreu. Esperava o que? Tu é um cozinheiro não um guerreiro mermão. "
            }
        ]
    },
   
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
