const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const triviaScore = new Schema({
    Corrct: { type: String, required: true },
    Incorrect: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Trivia", triviaScore);

module.exports = Book;