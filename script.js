const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta deve ser escrita aqui",
        alternativas: [
            {
                texto: "alternativa letra A deve ser escrita aqui",
                afirmacao: "Afirmação gerada se a pessoa escolher a letra A deve estar aqui "
            },
            {
                texto: "alternativa letra B deve ser escrita aqui",
                afirmacao: "Afirmação gerada se a pessoa escolher a letra B deve estar aqui "
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
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
