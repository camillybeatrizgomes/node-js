async function adicionarItem(carrinhoDoUsuario, item) {
    carrinhoDoUsuario.push(item);
}

async function deletarItem(carrinhoDoUsuario, nomeItem) {
    const indice = carrinhoDoUsuario.findIndex((item) => item.nome === nomeItem);

    if(indice !== -1) {
        carrinhoDoUsuario.splice(indice, 1);
    } 
}

async function removerItem(carrinhoDoUsuario, item) {
    // const deletarIndice = indice - 1;
    // if (indice >= 0 && indice < carrinhoDoUsuario.length) {
    //     carrinhoDoUsuario.splice(deletarIndice, 1);
    // }

    // 1. Encontrar o índice do item
    const indiceEncontrado = carrinhoDoUsuario.findIndex((p) => p.nome === item.nome);
    // 2. Caso não encontrar o item
    if (indiceEncontrado == -1) {
        console.log("Item não encontrado!");
        return;
    }
    // 3. Item maior que 1 subtrair um item, item igual a 1 deleta o item
    if (carrinhoDoUsuario[indiceEncontrado].quantidade > 1) {
        carrinhoDoUsuario[indiceEncontrado].quantidade -= 1;
        return;
    } 
    // 4. Caso item for igual a 1, será deletado
    if (carrinhoDoUsuario[indiceEncontrado].quantidade == 1) {
        carrinhoDoUsuario.splice(indiceEncontrado, 1);
        return;
    }
}

async function calcularTotal(carrinhoDoUsuario) {
    console.log("\nTotal do carrinho: ");
    const resultado = carrinhoDoUsuario.reduce((total, item) => total + item.subtotal(), 0);
    console.log("R$ " + resultado.toFixed(2));
}

async function exibirCarrinho(carrinhoDoUsuario) {
    console.log("\nSua lista do carrinho: ");
    carrinhoDoUsuario.forEach((item, indice) => {
        console.log(`${indice + 1}. ${item.nome} - R$ ${item.preco} | ${item.quantidade} | Subtotal R$ ${item.subtotal()}`);
    });
}

export {
    adicionarItem,
    deletarItem,
    removerItem,
    calcularTotal,
    exibirCarrinho
}