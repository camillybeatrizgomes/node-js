import createApp from "./app";

const app = createApp();
const porta = process.env.PORTA;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});