import prompt from 'prompt';

import mainPrompt from './prompts/prompt-main.js';
import criarQRCode from './services/qr-code/create.js';
import criarPassword from './services/password/create.js';

async function main() {
    prompt.get(mainPrompt, async (erro, escolha) => {
        if (erro) console.log(erro);

        if (escolha.select == 1) {
            console.log("Escolheu o QR Code!");
            await criarQRCode();
        }
        if (escolha.select == 2) {
            console.log("Escolheu o Password!");
            await criarPassword();
        }
        prompt.start();
    });
}

main();