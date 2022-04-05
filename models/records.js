const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    artist: String,
    albumTitle: String,
    coverArt: String,
    year: Number,
    genre: String
});

const Records = mongoose.model('Record', recordSchema);

module.exports = Records;