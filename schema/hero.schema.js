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
        type: String,
        required: true
    },
    started: {
        type: Date,
        required: true,
        default: new Date()
    },
    suit: {
        type: String,
        required: true
    },
    power_start: {
        type: Number,
        required: true,
        default: 0
    },
    power_current: {
        type: Number,
        required: true,
        default: 0
    }
})

mongoose.model("Heros", HeroSchema);