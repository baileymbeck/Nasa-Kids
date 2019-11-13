import axios from "axios";

export default {
    // Save score to database
    saveScore: function (scoreData) {
        return axios.post("/api/score", scoreData);
    },
    // Gets all saved scores
    getScores: function () {
        return axios.get("/api/score");
    },
    getScoresByGame: function(game) {
        return axios.get("/api/score" , {
            params: { game: game }
        })
    },
    getScoresByUserId: function(userId) {
        return axios.get("/api/score" , {
            params: {userId}
        })
    }
  
}