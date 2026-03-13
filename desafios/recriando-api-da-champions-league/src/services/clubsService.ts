import { findAllClubs } from "../repositories/clubsRepository";
import { ok } from "../utils/httpHelper"

export const getClubService = async () => {
    const data = await findAllClubs();
    const response = ok(data);
    return response;
};