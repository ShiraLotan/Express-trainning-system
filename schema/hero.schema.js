const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    guid_id: {
        type: Number,
        required: true
    },
    started: {
        type: Date,
        required: true
    },
    suit: {
        type: String,
        required: true
    },
    power_start: {
        type: Number,
        required: true
    },
    power_current: {
        type: Number,
        required: true
    }
})

mongoose.model("Heros", HeroSchema);