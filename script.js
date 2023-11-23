var numeroPensado;
// var tentativas; // Variável não utilizada

function gerar() {
   // Gera um número aleatório.
   numeroPensado = Math.random() * 100; // Adiciona um ponto e vírgula para terminar a instrução
   console.log(numeroPensado);
}

function verificarNumero() {
   // Implementa a lógica para verificar o número
    var elemento = document.getElementById('tente').value;
    if(tente > 100 || tente < 1)
    {
alert('Aposta invalida')
return
    }
    alert('aposta valida')
}

// refresh(); // Função indefinida, podes querer remover esta linha
