const { Schema, model } = require('mongoose');

const Proficiency = require('./Proficiency')
const Ability = require('./Ability')
const Equipment = require('./Equipment')
const Pack = require('./Pack')

const sortSchema = new Schema({
  sortName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  level: {
    type: Number,
    required: true,
  },
  proficiencies: [Proficiency.schema],
  baseFoundation: {
    type: Number
  },
  hand: {
    type: Number,
    min: 1
  },
  trait: {
    type: Number,
    min: 1
  },
  abilities: [Ability.schema],
  sourceSuit: {
    type: String
  },
  weapon: [Equipment.schema],
  sortSpecific: [Equipment.schema],
  pack: [Pack.schema],
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
  },
  levelSix: {
    type: String
  },
  levelSeven: {
    type: String
  },
  levelEight: {
    type: String
  },
  levelNine: {
    type: String
  },
  levelTen: {
    type: String
  },
});

const Sort = model('Sort', sortSchema);

module.exports = Sort;
