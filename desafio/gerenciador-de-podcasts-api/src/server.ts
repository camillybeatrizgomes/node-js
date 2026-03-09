import * as http from 'http';
import { app } from './app';


const server = http.createServer(app);

const porta = process.env.PORTA;

server.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}`);
});