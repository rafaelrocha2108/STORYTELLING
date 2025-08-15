const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você lida melhor com:",
        alternativas: [
            {
                texto: "Fatos",
                afirmacao: "Prioriza dados verificáveis"
            },
            {
                texto: "Intuições",
                afirmacao: "Confia em percepções internas"
            }
        ]
    },
    {
        enunciado: "Ao resolver um problema, você:",
        alternativas: [
            {
                texto: "Segue o método",
                afirmacao: "Prefere soluções estruturadas"
            },
            {
                texto: "Improvisa",
                afirmacao: "Adapta conforme a situação"
            }
        ]
    },
    {
        enunciado: "Você prefere ambientes:",
        alternativas: [
            {
                texto: "Controlados",
                afirmacao: "Funciona melhor sob regras claras"
            },
            {
                texto: "Flexíveis",
                afirmacao: "Trabalha bem em cenários variáveis"
            }
        ]
    },
    {
        enunciado: "Ao lidar com falhas, você tende a:",
        alternativas: [
            {
                texto: "Corrigir imediatamente",
                afirmacao: "Busca restauração rápida"
            },
            {
                texto: "Analisar causas",
                afirmacao: "Investiga antes de agir"
            }
        ]
    },
    {
        enunciado: "Produtividade vem de:",
        alternativas: [
            {
                texto: "Disciplina",
                afirmacao: "Mantém rotina estável"
            },
            {
                texto: "Estímulo",
                afirmacao: "Age por motivação externa"
            }
        ]
    }
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
