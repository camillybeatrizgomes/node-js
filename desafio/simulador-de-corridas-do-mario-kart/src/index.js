const jogador1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};

const jogador2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

async function rolarDados() {
    return Math.floor(Math.random() * 6) + 1;
}

async function gerarBloco() {
    let random = Math.random();
    let resultado;

    switch (true) {
        case random < 0.33:
            resultado = "RETA";
            break;
        case random < 0.66:
            resultado = "CURVA";
            break;
        default:
            resultado = "CONFRONTO";
            break;
    }
    return resultado;
}

async function registrarResultadoDoDado(nomePersonagem, bloco, resultadoDosDados, atributo) {
    console.log(`${nomePersonagem} 🎲 rolou um dado de ${bloco} ${resultadoDosDados} + ${atributo} = ${resultadoDosDados + atributo}`);
}

async function rodarCorrida(personagem1, personagem2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🏁 Rodada ${i}`);

        // Sortear bloco
        let bloco = await gerarBloco();
        console.log(`Bloco: ${bloco}`);

        // Rolar os dados
        let resultadoDosDados1 = await rolarDados();
        let resultadoDosDados2 = await rolarDados();

        // Teste de habilidade
        let totalTesteDeHabilidade1 = 0;
        let totalTesteDeHabilidade2 = 0;

        if (bloco === "RETA") {
            totalTesteDeHabilidade1 = resultadoDosDados1 + personagem1.VELOCIDADE;
            totalTesteDeHabilidade2 = resultadoDosDados2 + personagem2.VELOCIDADE;

            await registrarResultadoDoDado(personagem1.NOME, "velocidade", resultadoDosDados1, personagem1.VELOCIDADE);
            await registrarResultadoDoDado(personagem2.NOME, "velocidade", resultadoDosDados2, personagem2.VELOCIDADE);
        }
        if (bloco === "CURVA") {
            totalTesteDeHabilidade1 = resultadoDosDados1 + personagem1.MANOBRABILIDADE;
            totalTesteDeHabilidade2 = resultadoDosDados2 + personagem2.MANOBRABILIDADE;

            await registrarResultadoDoDado(personagem1.NOME, "manobrabilidade", resultadoDosDados1, personagem1.MANOBRABILIDADE);
            await registrarResultadoDoDado(personagem2.NOME, "manobrabilidade", resultadoDosDados2, personagem2.MANOBRABILIDADE);
        }
        if (bloco === "CONFRONTO") {
            let resultadoDoPoder1 = resultadoDosDados1 + personagem1.PODER;
            let resultadoDoPoder2 = resultadoDosDados2 + personagem2.PODER;

            console.log(`${personagem1.NOME} confrontou com ${personagem2.NOME}! 🥊`);

            await registrarResultadoDoDado(personagem1.NOME, "poder", resultadoDosDados1, personagem1.PODER);
            await registrarResultadoDoDado(personagem2.NOME, "poder", resultadoDosDados2, personagem2.PODER);

            if (resultadoDoPoder1 > resultadoDoPoder2) {
                console.log(`${personagem1.NOME} venceu o confronto! ${personagem2.NOME} perdeu 1 ponto 🐢`);
                if (personagem2.PONTOS > 0) {
                    personagem2.PONTOS--;
                }
            }

            else if (resultadoDoPoder2 > resultadoDoPoder1) {
                console.log(`${personagem2.NOME} venceu o confronto! ${personagem1.NOME} perdeu 1 ponto 🐢`);
                if (personagem1.PONTOS > 0) {
                    personagem1.PONTOS--;
                }
            }
            console.log(resultadoDoPoder2 === resultadoDoPoder1 ? "Confronto empatado! Nenhum ponto foi perdido": "");
        }
        // Verificando o vencedor
        if (totalTesteDeHabilidade1 > totalTesteDeHabilidade2) {
            console.log(`${personagem1.NOME} marcou um ponto!`);
            personagem1.PONTOS++;
        } else if (totalTesteDeHabilidade2 > totalTesteDeHabilidade1) {
            console.log(`${personagem2.NOME} marcou um ponto!`);
            personagem2.PONTOS++;
        }
        console.log("-----------------------------------");
    }
}

async function declararVencedor(personagem1, personagem2) {
    console.log("Resultado final:");
    console.log(`${personagem1.NOME}: ${personagem1.PONTOS} ponto(s)`);
    console.log(`${personagem2.NOME}: ${personagem2.PONTOS} ponto(s)`);

    if (personagem1.PONTOS > personagem2.PONTOS) {
        console.log(`\n${personagem1.NOME} venceu a corrida! Parabéns! 🏆`);
    } else if (personagem2.PONTOS > personagem1.PONTOS) {
        console.log(`\n${personagem2.NOME} venceu a corrida! Parabéns! 🏆`);
    } else {
        console.log("A corrida terminou em empate!");
    }
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${jogador1.NOME} e ${jogador2.NOME} começando...\n`);

    await rodarCorrida(jogador1, jogador2);
    await declararVencedor(jogador1, jogador2);
})();
