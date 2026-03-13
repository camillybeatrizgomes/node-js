import { getClubService } from "../services/clubsService";
import { Request, Response } from "express";

export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubService();
    res.status(response.statusCode).json(response.body);
}