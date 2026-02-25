import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(erro, resultado) {
    if (erro) {
        console.log("Erro na aplicação");
        return;
    }
    const isSmall = resultado.type == 2;
    qr.generate(resultado.link, {small: isSmall}, (qrCode) => {
        console.log(chalk.green("QR Code gerado com sucesso: \n"));
        console.log(qrCode);
    });
}

export default handle;