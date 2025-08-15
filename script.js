const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você prefere aprender:",
        alternativas: [
            {
                texto: "Tecnologia e números",
                afirmacao: "desde cedo, você demonstrava interesse por lógica e inovação"
            },
            {
                texto: "Linguagens e emoções",
                afirmacao: "sua sensibilidade e paixão por comunicação sempre foram marcantes"
            }
        ]
    },
    {
        enunciado: "O que te motiva no trabalho:",
        alternativas: [
            {
                texto: "Resolver problemas complexos",
                afirmacao: "enfrentar desafios técnicos te impulsionava a crescer"
            },
            {
                texto: "Expressar ideias",
                afirmacao: "você encontrava sentido em transformar pensamentos em criações"
            }
        ]
    },
    {
        enunciado: "Qual tarefa te empolga mais:",
        alternativas: [
            {
                texto: "Pensar em um sistema",
                afirmacao: "você adorava planejar estruturas e tornar processos mais eficientes"
            },
            {
                texto: "Contar uma história",
                afirmacao: "sua imaginação transformava o mundo em palavras encantadoras"
            }
        ]
    },
    {
        enunciado: "No trabalho, surge um problema, como você o resolveria:",
        alternativas: [
            {
                texto: "Analisando e deduzindo",
                afirmacao: "sua mente lógica sempre encontrava a raiz do problema"
            },
            {
                texto: "Pensando soluções criativas",
                afirmacao: "você surpreendia com ideias fora do comum"
            }
        ]
    },
    {
        enunciado: "Como você gostaria de ser lembrado(a):",
        alternativas: [
            {
                texto: "Pela capacidade de transformar ideias em soluções",
                afirmacao: "você deixou um legado de inovação e impacto real"
            },
            {
                texto: "Por inspirar pessoas com suas ideias e histórias",
                afirmacao: "você tocou vidas com sua visão e empatia"
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
