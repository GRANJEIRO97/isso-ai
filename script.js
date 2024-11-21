// script.js

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio do formulário (recarregamento da página)

    // Obter as notas inseridas
    let nota1 = parseFloat(document.getElementById('nota1').value.replace(',', '.'));
    let nota2 = parseFloat(document.getElementById('nota2').value.replace(',', '.'));
    let nota3 = parseFloat(document.getElementById('nota3').value.replace(',', '.'));

    // Calcular a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Exibir o resultado
    let resultadoDiv = document.getElementById('resultado');
    if (isNaN(media)) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos nas notas.";
        resultadoDiv.className = "resultado";
    } else if (media >= 6) {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(2)} - Aprovado!`;
        resultadoDiv.className = "resultado aprovado";
    } else {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(2)} - Reprovado!`;
        resultadoDiv.className = "resultado reprovado";
    }
});

