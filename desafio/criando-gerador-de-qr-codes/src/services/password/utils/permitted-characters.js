async function caracteresPermitidos() {
    let permissao = [];
    
    if (process.env.UPPERCASE_LETTERS === "true") {
        permissao.push( ... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (process.env.LOWERCASE_LETTERS === "true") {
        permissao.push( ... "abcdefghijklmnopqrstuvwxyz");
    }
    if (process.env.NUMBERS === "true") {
        permissao.push( ... "0123456789");
    }
    if (process.env.SPECIAL_CHARACTERS === "true") {
        permissao.push( ... "!@#$%^&*()-_");
    }
    return permissao;
}

export default caracteresPermitidos;