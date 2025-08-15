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
                afirmacao: "Aplica critérios racionais"
            },
            {
                texto: "Baseada em contexto",
                afirmacao: "Avalia variáveis externas"
            }
        ]
    },
    {
        enunciado: "Interpretação de instruções:",
        alternativas: [
            {
                texto: "Segue exatamente",
                afirmacao: "Cumpre conforme especificado"
            },
            {
                texto: "Adapta se necessário",
                afirmacao: "Ajusta conforme demanda real"
            }
        ]
    },
    {
        enunciado: "Reação a mudança súbita:",
        alternativas: [
            {
                texto: "Replaneja",
                afirmacao: "Reconstrói estratégias rapidamente"
            },
            {
                texto: "Minimiza impacto",
                afirmacao: "Reduz instabilidade do sistema"
            }
        ]
    },
    {
        enunciado: "Execução de tarefas repetitivas:",
        alternativas: [
            {
                texto: "Aceita",
                afirmacao: "Mantém consistência no processo"
            },
            {
                texto: "Evita",
                afirmacao: "Prefere variação e estímulo"
            }
        ]
    },
    {
        enunciado: "Não gosta de:",
        alternativas: [
            {
                texto: "Mudanças rápidas",
                afirmacao: "Prefere previsibilidade"
            },
            {
                texto: "Rotina",
                afirmacao: "Gosta de novidades"
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + ". ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        mostraPergunta();
    });
    caixaAlternativas.appendChild(botaoReiniciar);
}

mostraPergunta();
