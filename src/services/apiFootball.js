import axios from "axios";

const makeDefaultOptions = (urlEndpoint, params) => ({
  method: "GET",
  url: `https://api-football-v1.p.rapidapi.com/v3/${urlEndpoint}`,
  params,
  headers: {
    "X-RapidAPI-Key": "3a80eeaaecmsha050f3aeb33b2ebp164d4bjsn921306083ca8",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});

const apiServices = {
  getTeamsByName: async (teamName) => {
    const params = { search: teamName };

    const options = makeDefaultOptions("teams", params);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentTeamSquad: async (teamId) => {
    const params = {
      team: teamId,
    };

    const options = makeDefaultOptions("players/squads", params);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getFullTeamSquad: async (teamId, page) => {
    const params = {
      team: teamId,
      season: "2022",
    };

    if (page) {
      params.page = page;
    }

    const options = makeDefaultOptions("players", params);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getAllCountries: async () => {
    const options = makeDefaultOptions("countries");
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getPlayerById: async (playerId) => {
    const params = {
      id: playerId,
      season: "2022",
    };

    const options = makeDefaultOptions("players", params);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getNationByName: async (nationName) => {
    const params = {
      name: nationName,
    };

    const options = makeDefaultOptions("countries", params);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default apiServices;
