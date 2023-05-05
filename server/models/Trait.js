const { Schema, model } = require('mongoose');

const traitSchema = new Schema({
    traitName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    suit: {
        type: String
    }
});

const Trait = model('Trait', traitSchema);

module.exports = Trait;