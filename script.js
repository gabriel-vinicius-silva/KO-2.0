const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarNumero() {
    const palpiteUsuario = document.getElementById("tente").value;
    tentativas++;

    const mensagemDiv = document.getElementById("quadradao");

    if (palpiteUsuario == numeroSecreto) {
        mensagemDiv.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`;
    } else if (palpiteUsuario < numeroSecreto) {
        mensagemDiv.textContent = "Tente novamente. voce esta longe.";
    } else {
        mensagemDiv.textContent = "Tente novamente.voce esta perto.";
    }
}
