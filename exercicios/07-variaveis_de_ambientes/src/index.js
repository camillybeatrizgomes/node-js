import conectarBancoDeDados from "./database/data.js";

async function main() {
    console.log(process.env.USUARIODATABASE);
    console.log(process.env.SENHADATABASE);
    await conectarBancoDeDados(process.env.USUARIODATABASE, process.env.SENHADATABASE);

}

main();