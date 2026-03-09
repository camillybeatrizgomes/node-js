import { IncomingMessage, ServerResponse } from 'http';
import { serviceListaDeEpisodios } from '../services/listEpisodesService';
import { serviceFiltrarEpisodios } from '../services/filterEpisodesService';
import { ContentType } from '../utils/contentType';
import { PodcastTransferModel } from '../models/PodcastTransferModel';

const defaultContent = {"content-type": ContentType.JSON };

export const obterListaDeEpisodios = async (req : IncomingMessage, res : ServerResponse) => {
    const content: PodcastTransferModel = await serviceListaDeEpisodios();

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body))
    res.end();
};

export const obterFiltroDeEpisodios = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceFiltrarEpisodios(req.url);

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body))
    res.end();
}