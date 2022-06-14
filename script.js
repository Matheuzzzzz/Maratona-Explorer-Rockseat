const elementoResposta = document.querySelector("resposta");
const inputPergunta = document.querySelector("pergunta");
let resposta = [
    "Nao",
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta(){

  const totalRespostas = resposta.length;
  const numeroAleatorio = Math.floor(Math.random() *totalRespostas);

  if (inputPergunta.value == ""){

    elementoResposta.innerHTML = "Digite sua pergunta";
    return;
  }
  const pergunta = "<div>" + inputPergunta.value + "</div>";
  elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio];

  setTimeout(function(){

    elementoResposta.style.opacity = 0

  },3000)
}