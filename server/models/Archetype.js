const { Schema, model } = require('mongoose');

const Ability = require('./Ability')

const archetypeSchema = new Schema({
    archetypeName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    level: {
        type: Number
    },
    abilities: [Ability.schema],
});

const Archetype = model('Archetype', archetypeSchema);

module.exports = Archetype;