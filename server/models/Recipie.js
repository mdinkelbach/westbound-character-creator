const { Schema, model } = require('mongoose');

const recipieSchema = new Schema({
    recipieName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    keystone: {
        type: String
    },
    consumeable: {
        type: String
    },
    effect: {
        type: String
    },
    wateredDown: {
        type: String
    },
    freshKeystone: {
        type: String
    }
});

const Recipie = model('Recipie', recipieSchema);

module.exports = Recipie;