import * as funcoesDoCarrinho from './services/carrinho.js'
import criarItem from './services/item.js';

const meuCarrinho = [];

console.log("Bem vindo ao seu carrinho da Shopee!");

const item1 = await criarItem("Teclado com fio", 35.99, 2);
const item2 = await criarItem("Fone de ouvido com fio", 12.99, 3);
const item3 = await criarItem("Carregador portátil", 45.99, 1);

await funcoesDoCarrinho.adicionarItem(meuCarrinho, item1);
await funcoesDoCarrinho.adicionarItem(meuCarrinho, item2);
await funcoesDoCarrinho.adicionarItem(meuCarrinho, item3);

await funcoesDoCarrinho.removerItem(meuCarrinho, item2);
await funcoesDoCarrinho.removerItem(meuCarrinho, item2);

// await funcoesDoCarrinho.deletarItem(meuCarrinho, item1.nome);

await funcoesDoCarrinho.exibirCarrinho(meuCarrinho);

await funcoesDoCarrinho.calcularTotal(meuCarrinho);
