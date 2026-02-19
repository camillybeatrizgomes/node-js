// Todas as funções que lidam com o produto
async function obterNomeCompleto(codigoId, nomeProduto) {
    console.log("Produto: " + codigoId + "-" + nomeProduto);
    await quebrarLinha();
}

async function obterNomeProduto(nomeProduto) {
    console.log("Produto: " + nomeProduto);
}

async function quebrarLinha() {
    console.log("");
}

module.exports = {
    obterNomeCompleto,
    obterNomeProduto
};