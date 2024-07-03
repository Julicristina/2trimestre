const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
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
     {
        enunciado: "Se você escolheu o caminho sombrio e misterioso. ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
