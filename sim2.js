function alterarImagem() {
    const imagem = document.getElementById("imagem");
        imagem.src = "dog.jpeg"; 
}

function alterarTitulo() {
    const titulo = document.querySelector("h1");
    titulo.textContent = "Título Alterado";
}

function alterarCorParagrafo() {
    const paragrafo = document.querySelector("p");
    paragrafo.style.color = "green";
}

function tocarAudio() {
    const audio = new Audio("Coin mario.wav");
    audio.play();
}

function toggleBotoes() {
    const botoes = document.querySelectorAll(".id2");
    botoes.forEach(botao => botao.classList.toggle("toggle"));
}
