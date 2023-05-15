const { Schema, model } = require('mongoose');

const abilitySchema = new Schema({
    abilityName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    suit: {
        type: String
    },
    level: {
        type: Number,
    }
});

const Ability = model('Ability', abilitySchema);

module.exports = Ability;