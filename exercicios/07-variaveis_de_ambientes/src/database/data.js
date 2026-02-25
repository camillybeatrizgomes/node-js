async function conectarBancoDeDados(usuario, senha) {
    if (usuario === process.env.USUARIODATABASE && senha === process.env.SENHADATABASE) {
        console.log("Conexão com banco de dados estabelecida.");
    } else {
        console.log("Falha de login, não foi possível se conectar ao banco de dados.");
    }
}

export default conectarBancoDeDados;