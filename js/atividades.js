const form = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let acertos = 0;

    // Quantidade automática de questões
    const totalQuestoes = Object.keys(gabarito).length;

    // Verifica respostas
    for (let questao in gabarito) {

        const respostaSelecionada = document.querySelector(
            `input[name="${questao}"]:checked`
        );

        if (
            respostaSelecionada &&
            respostaSelecionada.value === gabarito[questao]
        ) {
            acertos++;
        }
    }

    // Calcula porcentagem
    const porcentagem = Math.round(
        (acertos / totalQuestoes) * 100
    );

    // Mensagem personalizada
    let mensagem = "";

    if (porcentagem === 100) {
        mensagem = "Excelente!";
    }
    else if (porcentagem >= 70) {
        mensagem = "Muito bom!";
    }
    else if (porcentagem >= 50) {
        mensagem = "Você foi bem!";
    }
    else {
        mensagem = "Continue estudando!";
    }

    // Exibe resultado
    resultado.innerHTML = `
        ${mensagem} Você acertou ${acertos} de ${totalQuestoes} questões.
        <br>
        Nota: ${porcentagem}%
    `;
});
