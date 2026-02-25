import caracteresPermitidos from "./utils/permitted-characters.js";

async function handle() {
    let caracteres = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    caracteres = await caracteresPermitidos();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        password += caracteres[index];
    }
    return password;
}

export default handle;