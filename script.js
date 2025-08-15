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
    },
    {
    enunciado: "Tomada de decisão:",
    alternativas: [
        {
            texto: "Baseada em lógica",
            afirmacao: "Aplica critérios racionais",
            tags: ["logica"]
        },
        {
            texto: "Baseada em contexto",
            afirmacao: "Avalia variáveis externas",
            tags: ["adaptacao"]
        }
    ]
},
    {
        enunciado: "Interpretação de instruções:",
        alternativas: [
            {
                texto: "Segue exatamente",
                afirmacao: "Cumpre conforme especificado",
                tags: ["estrutura"]
            },
            {
                texto: "Adapta se necessário",
                afirmacao: "Ajusta conforme demanda real",
                tags: ["adaptacao"]
            }
        ]
    },
    {
        enunciado: "Reação a mudança súbita:",
        alternativas: [
            {
                texto: "Replaneja",
                afirmacao: "Reconstrói estratégias rapidamente",
                tags: ["adaptacao"]
            },
            {
                texto: "Minimiza impacto",
                afirmacao: "Reduz instabilidade do sistema",
                tags: ["estrutura"]
            }
        ]
    },
    {
        enunciado: "Execução de tarefas repetitivas:",
        alternativas: [
            {
                texto: "Aceita",
                afirmacao: "Mantém consistência no processo",
                tags: ["estrutura"]
            },
            {
                texto: "Evita",
                afirmacao: "Prefere variação e estímulo",
                tags: ["adaptacao"]
            }
        ]
    },
    {
        enunciado: "Processamento de falha humana:",
        alternativas: [
            {
                texto: "Lógica aplicada",
                afirmacao: "Interpreta padrões de erro",
                tags: ["logica"]
            },
            {
                texto: "Contexto considerado",
                afirmacao: "Avalia fatores situacionais",
                tags: ["adaptacao"]
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
