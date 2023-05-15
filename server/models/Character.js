const { Schema, model } = require('mongoose');

const Trait = require('./Trait')
const Equipment = require('./Equipment')
//const Craft = require('./Craft')

const characterSchema = new Schema({
  characterName: {
    type: String,
    required: true,
    trim: true
  },
  level: {
    type: Number,
    required: true,
    min: 1
  },
  hand: {
    type: Number,
    required: true,
    min: 1
  },
  speed: {
    type: Number,
    required: true,
    min: 5
  },
  armor: {
    type: Number,
    required: true,
    min: 1
  },
  serendipity: {
    type: Boolean
  },
  title: {
    type: String,
    trim: true
  },
  crime: {
    type: String
  },
  portrait: {
    type: String
  },
  stash: {
    type: String
  },
  notes: {
    type: String
  },
  pack: {
    type: Schema.Types.ObjectId,
    ref: 'Pack',
    required: true,
  },
  sort: {
    type: Schema.Types.ObjectId,
    ref: 'Sort',
    required: true,
  },
  breed: {
    type: Schema.Types.ObjectId,
    ref: 'Breed',
    required: true,
  },
  archetype: {
    type: Schema.Types.ObjectId,
    ref: 'Archetype',
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class'
  },
  traits: [Trait.schema],
  equipments: [Equipment.schema]
  
});

const Character = model('Character', characterSchema);

module.exports = Character;
