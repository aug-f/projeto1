const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {//objeto é onde começa e termina a chave
        enunciado: "Você acorda. Uma sala tão branca que chega a ser ofuscante invade seus olhos. Na sua frente está uma caixa fechada, o que você deseja fazer?",
        alternativas: [
            {
                texto: "Abrir a caixa",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
            texto: "Quem é você, porquê estou aqui?",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }            
        ]
    },//Esta vírgula é para separar os objetos
    {
        enunciado: "Você, assim como qualquer outra criatura, tem um certo controle limitado das suas ações. Eu apenas assumi o papel de limitante e, você, o de agente. Você abre a caixa e encontra um botão. Você deve aperta-lo. ",
        alternativas: [
            {
                texto: "...",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Por que estou aqui?.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever"
            }            
        ]
    },
    {
        enunciado: "As circunstâncias por trás da sua chegada são irrelevantes. Não importa o porquê você está aqui. O que importa é que você está. Você deve apertar o botão.",
        alternativas: [
            {
                texto: "O que esse botão faz? Porque devo ser obrigado a agir se não sei porque estou agindo?",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Apertar o botão.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }            
        ]
    },
    {
        enunciado: "Da mesma forma como você vive sem saber porque vive. E anda sem saber porque anda. E morre sem saber porque morre. Você irá apertar o botão sem saber porque aperta. Quantas vezes você teve escolha sobre o que fazer na sua vida? Você nunca teve controle sobre nada. Aqui também não terá. Você, independente de querer ou não, você aperta o botão.",
        alternativas: [
            {
                texto: "Nada aconteceu. Foi bem anticlimático na verdade.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "...",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }            
        ]
    },
    {
        enunciado: "Você. Ser de carne e sangue. De mente e de alma. Está restrito a esta sala. Você em sua vida se importava com todas as consequências das suas ações? Quantas vezes você machucou os outros sem nem pensar no quanto havia machucado? Não sinto nada por você humano, mas, se tivesse que descrever a sua situação, a tí resta somente a punição. ",
        alternativas: [
            {
                texto: "Eu sofro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Eu sofro.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }            
        ]
    },
];
let atual = 0; //variável que varia (marcador)
let perguntaAtual;//variável que vai receber o texto
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length) {
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";  
        atual++;
        mostraPergunta();    
}
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = hitoriaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
