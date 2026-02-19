const tipoDeBancoDeDados = {
    userType: "admin",
    typeData: "datalocal"
}

async function conectarBancoDeDados(nomeBanco) {
    console.log("Conectado ao banco " + nomeBanco);
}

async function desconectarBancoDeDados() {
    console.log("Desconectando do banco de dados...");
}

export {conectarBancoDeDados, desconectarBancoDeDados, tipoDeBancoDeDados};