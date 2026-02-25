import prompt from 'prompt';
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from './handle.js';

async function criarQRCode() {
    prompt.get(promptQRCode, handle);
    prompt.start();
}

export default criarQRCode;