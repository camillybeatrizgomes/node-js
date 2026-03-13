import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/playerService";
import { noContent } from "../utils/httpHelper";
import { StatisticsModel } from "../models/statisticsModel";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const httpResponse = await getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await createPlayerService(bodyValue);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayer = async (req: Request, res:Response) => {
    const id = parseInt(req.params.id as string);
    const httpResponse = await deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};