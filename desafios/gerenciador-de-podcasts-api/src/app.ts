import * as http from 'http';
import { obterFiltroDeEpisodios, obterListaDeEpisodios } from './controllers/podcastsController';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/httpMethods';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const baseUrl = req.url?.split("?")[0];

    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await obterListaDeEpisodios(req, res);
    } 

    if (req.method ===HttpMethods.GET && baseUrl === Routes.FILTER) {
        await obterFiltroDeEpisodios(req, res);
    }
}