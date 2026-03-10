import { Podcast } from "./podcastModels";

export interface PodcastTransferModel {
    statusCode: number,
    body: Podcast[];
}