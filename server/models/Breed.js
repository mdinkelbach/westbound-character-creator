const { Schema, model } = require('mongoose');

const Ability = require('./Ability')

const breedSchema = new Schema({
    breedName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    level: {
        type: Number
    },
    cultureOne: {
        type: String
    },
    cultureTwo: {
        type: String
    },
    age: {
        type: String
    },
    abilities: [Ability.schema],
    speed: {
        type: Number,
        min: 5
    },
    blackSight: {
        type: Boolean
    },
    blackSightRange: {
        type: Number
    },
    trait: {
        type: Number,
        min: 1
    },
    levelOne: {
        type: String
      },
    levelTwo: {
        type: String
      },
    levelTree: {
        type: String
      },
    levelFour: {
        type: String
      },
    levelFive: {
        type: String
      }
});

const Breed = model('Breed', breedSchema);

module.exports = Breed;