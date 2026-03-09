import { PodcastTransferModel } from "../models/PodcastTransferModel";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceFiltrarEpisodios = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }
    responseFormat.body = data;

    return responseFormat;
};