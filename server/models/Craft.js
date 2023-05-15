const { Schema, model } = require('mongoose');

const Recipie = require('./Recipie')

const craftSchema = new Schema({
    craftName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    recipies: [Recipie.schema],
});

const Craft = model('Craft', craftSchema);

module.exports = Craft;