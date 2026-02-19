import * as database from "./utils/database.js";
import { obterDadosDaApi, chave } from './utils/api.js'

database.conectarBancoDeDados("db-meu-banco");
database.desconectarBancoDeDados();
obterDadosDaApi();