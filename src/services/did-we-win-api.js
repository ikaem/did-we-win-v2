import axios from "axios";

const baseUrl = `https://arcane-atoll-67171.herokuapp.com`;

export const getCompetitions = async () => {
    try {
        const result = await axios.get(`${baseUrl}`).then(({data}) => data);
        if(result.message !== "competitions retrieved successfully") {
            console.log(result.message);
            return result.data;
        };
        return result.data;
    }
    catch (error) {
        console.log(error.message);
        return [];
    }
}

export const getMatches = async (fromDate, toDate, competitionId) => {
    try {
        const result = await axios.get(`${baseUrl}/matches?from=${fromDate}&to=${toDate}&comp_id=${competitionId}`).then(({data}) => data);
        if(result.message !== "competition matches retrieved successfully") {
            console.log(result.message);
            return result.data;
        };
        return result.data;
    }
    catch (error) {
        console.log(error.message);
        return [];
    }
}

export const getMatch = async (matchId) => {
    try {
        const result = await axios.get(`${baseUrl}/match/${matchId}`).then(({data}) => data);
        if(result.message !== "detailed match retrieved successfully") {
            console.log(result.message);
            return result.data;
        };
        return result.data;
    }
    catch (error) {
        console.log(error.message);
        return [];
    }
}

export const getStandings = async (compId) => {
    try {
        const result = await axios.get(`${baseUrl}/standings/${compId}`).then(({data}) => data);
        if(result.message !== "competition standings retrieved successfully") {
            console.log(result.message);
            return result.data;
        };
        return result.data;
    }
    catch (error) {
        console.log(error.message);
        return [];
    }
}