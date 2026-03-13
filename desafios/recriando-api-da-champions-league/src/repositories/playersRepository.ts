import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";

const database: PlayerModel[] = [
    {
    id: 1,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "França",
    position: "Atacante",
    statistics: {
      Overall: 92,
      Pace: 97,
      Shooting: 91,
      Passing: 82,
      Dribbling: 94,
      Defending: 36,
      Physical: 78
    }
  },
  {
    id: 2,
    name: "Harry Kane",
    club: "Bayern München",
    nationality: "Inglaterra",
    position: "Atacante",
    statistics: {
      Overall: 91,
      Pace: 75,
      Shooting: 94,
      Passing: 85,
      Dribbling: 85,
      Defending: 47,
      Physical: 83
    }
  },
  {
    id: 3,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Noruega",
    position: "Atacante",
    statistics: {
      Overall: 91,
      Pace: 88,
      Shooting: 95,
      Passing: 66,
      Dribbling: 81,
      Defending: 45,
      Physical: 92
    }
  },
  {
    id: 4,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brasil",
    position: "Atacante",
    statistics: {
      Overall: 90,
      Pace: 95,
      Shooting: 86,
      Passing: 82,
      Dribbling: 93,
      Defending: 30,
      Physical: 71
    }
  },
  {
    id: 5,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "Inglaterra",
    position: "Meio-campista",
    statistics: {
      Overall: 91,
      Pace: 83,
      Shooting: 87,
      Passing: 84,
      Dribbling: 89,
      Defending: 79,
      Physical: 86
    }
  },
  {
    id: 6,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Holanda",
    position: "Defensor",
    statistics: {
      Overall: 90,
      Pace: 78,
      Shooting: 60,
      Passing: 72,
      Dribbling: 72,
      Defending: 92,
      Physical: 91
    }
  },
  {
    id: 7,
    name: "Thibaut Courtois",
    club: "Real Madrid",
    nationality: "Bélgica",
    position: "Goleiro",
    statistics: {
      Overall: 90,
      Pace: 46,
      Shooting: 18,
      Passing: 76,
      Dribbling: 55,
      Defending: 90,
      Physical: 88
    }
  },
  {
    id: 8,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brasil",
    position: "Goleiro",
    statistics: {
      Overall: 90,
      Pace: 50,
      Shooting: 20,
      Passing: 86,
      Dribbling: 60,
      Defending: 89,
      Physical: 86
    }
  },
  {
    id: 9,
    name: "Lamine Yamal",
    club: "Barcelona",
    nationality: "Espanha",
    position: "Atacante",
    statistics: {
        Overall: 85,
        Pace: 92,
        Shooting: 80,
        Passing: 78,
        Dribbling: 88,
        Defending: 40,
        Physical: 70
    }
  },
  {
    id: 10,
    name: "Raphinha",
    club: "Barcelona",
    nationality: "Brasil",
    position: "Atacante",
    statistics: {
        Overall: 88,
        Pace: 90,
        Shooting: 85,
        Passing: 80,
        Dribbling: 90,
        Defending: 35,
        Physical: 75
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  } 
  return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }
  return database[playerIndex];
}