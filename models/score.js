const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user")

const scoreSchema = new Schema({
    name: { type: String, required: true, enum: ['trivia', 'clicky'] }, //enum validates the game name to those listed
    score: { type: {}, required: true },
    userId: { type: String },
    date: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;