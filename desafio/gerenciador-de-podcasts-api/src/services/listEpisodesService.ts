import { PodcastTransferModel } from "../models/PodcastTransferModel";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceListaDeEpisodios = async (): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };
    const data = await repositoryPodcast();

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }
    responseFormat.body = data;
    return responseFormat;
};