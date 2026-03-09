async function getBaseEmail(senderName : string) : Promise<string> {
    let base = `Olá ${senderName}, gostaria de me inscrever no Bootcamp da DIO`;
    base += "\n estou deixando os meus dados";
    return base;
}

export { getBaseEmail };