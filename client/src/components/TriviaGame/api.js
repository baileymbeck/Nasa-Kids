import axios from "axios";

export default {
    // Save score to database
    saveScore: function (scoreData) {
        return axios.post("/api/score", scoreData);
    },
    // Gets all saved books
    getScores: function () {
        return axios.get("/api/score");
    },
  
}