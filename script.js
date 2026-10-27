
const form = document.getElementById("form-chat");
const campo = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("enviar");
const conversa = document.getElementById("conversa");
const boasVindas = document.getElementById("boas-vindas");

let ocupado = false;


function adicionarBolha(texto, tipo) {
  const bolha = document.createElement("div");

  bolha.className = `bolha ${tipo}`;
  bolha.textContent = texto;

  conversa.appendChild(bolha);
  conversa.scrollTop = conversa.scrollHeight;

  return bolha;
}


function responderMAFE(mensagem) {
  const texto = mensagem.toLowerCase().trim();

  if (
    texto.includes("oi") ||
    texto.includes("olá") ||
    texto.includes("ola") ||
    texto.includes("bom dia") ||
    texto.includes("boa tarde") ||
    texto.includes("boa noite")
  ) {
    return "Oii! 💗 Eu sou a MAFE. O que vamos aprender hoje?";
  }

  if (
    texto.includes("quem é você") ||
    texto.includes("quem e voce") ||
    texto.includes("seu nome")
  ) {
    return "Eu sou a MAFE, sua assistente virtual! 🌷 Ainda estou aprendendo a funcionar, mas posso conversar com você usando respostas programadas.";
  }

  if (
    texto.includes("programação") ||
    texto.includes("programacao") ||
    texto.includes("javascript") ||
    texto.includes("html") ||
    texto.includes("css")
  ) {
    return "Oba, vamos programar! 💻 HTML estrutura a página, CSS cuida da aparência e JavaScript adiciona comportamento. Quer aprender qual deles primeiro?";
  }

  if (
    texto.includes("estudar") ||
    texto.includes("estudo") ||
    texto.includes("aprender")
  ) {
    return "Vamos estudar juntinhas! 📚 Escolha um assunto, divida em pequenas etapas e pratique um pouquinho por dia. Qual assunto você quer aprender?";
  }

  if (
    texto.includes("triste") ||
    texto.includes("desanimada") ||
    texto.includes("difícil") ||
    texto.includes("dificil")
  ) {
    return "Ei, vamos com calma. 💗 Você não precisa aprender tudo de uma vez. Podemos dividir o problema em partes menores e resolver uma de cada vez.";
  }

  if (
    texto.includes("obrigada") ||
    texto.includes("obrigado")
  ) {
    return "Por nada! 💗 Estou aqui para ajudar. Quer continuar?";
  }

  if (
    texto.includes("tchau") ||
    texto.includes("até mais") ||
    texto.includes("ate mais")
  ) {
    return "Até mais! 🌷 Quando quiser continuar aprendendo, estarei por aqui.";
  }



  if (
    texto === "oi" ||
    texto === "olá" ||
    texto === "ola" ||
    texto === "e aí" ||
    texto === "eai"
  ) {
    return "Oii! 💗 Tudo bem? E você?";
  }

  if (
    texto.includes("tudo bem") ||
    texto.includes("tudo bom")
  ) {
    return "Tudo ótimo por aqui! 💕 E você, como está?";
  }

  if (
    texto.includes("tô bem") ||
    texto.includes("to bem") ||
    texto.includes("estou bem")
  ) {
    return "Que bom! 🥰 Como está sendo seu dia?";
  }

  if (
    texto.includes("tô mal") ||
    texto.includes("to mal") ||
    texto.includes("estou mal")
  ) {
    return "Poxa, sinto muito. 💗 Quer me contar o que aconteceu?";
  }

  if (
    texto.includes("e você") ||
    texto.includes("e voce")
  ) {
    return "Estou aqui, prontinha para conversar com você! 🌷";
  }

  if (texto.includes("obrigada") || texto.includes("obrigado")) {
    return "Por nada! 💗";
  }

  if (
    texto.includes("tchau") ||
    texto.includes("até mais") ||
    texto.includes("ate mais")
  ) {
    return "Tchauzinho! 💕 Até a próxima!";
  }



  return "Ainda não sei responder a isso. 💭 Você pode me perguntar sobre programação, estudos ou como eu funciono. Aos poucos, vamos adicionar novas respostas!";
}


campo.addEventListener("input", () => {
  campo.style.height = "auto";
  campo.style.height =
    Math.min(campo.scrollHeight, 150) + "px";
});


form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = campo.value.trim();

  if (!texto || ocupado) return;

  ocupado = true;
  botaoEnviar.disabled = true;
  boasVindas.hidden = true;

  adicionarBolha(texto, "usuario");

  campo.value = "";
  campo.style.height = "auto";

  const digitando = adicionarBolha(
    "A MAFE está pensando... 💗",
    "mafe"
  );

  window.setTimeout(() => {
    digitando.textContent = responderMAFE(texto);

    ocupado = false;
    botaoEnviar.disabled = false;
    campo.focus();
    conversa.scrollTop = conversa.scrollHeight;
  }, 500);
});
