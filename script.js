// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número de tentativas permitidas
let tentativas = 0;

function verificarPalpite() {
    const palpiteUsuario = document.getElementById("guessInput").value;
    tentativas++;

    if (palpiteUsuario == numeroSecreto) {
        alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    } else if (palpiteUsuario < numeroSecreto) {
        alert("Tente novamente. O número é maior.");
    } else {
        alert("Tente novamente. O número é menor.");
    }
}
