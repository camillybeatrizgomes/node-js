const { obterNomeCompleto, obterNomeProduto } = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main() {
    console.log("Carrinho de Compras: ");
    obterNomeCompleto("445", "Teclado");
    obterNomeCompleto("119", "Mouse");
    obterNomeProduto("Televisão");

    console.log(config.cliente);
    database.conectarBancoDeDados("node");
}

main();