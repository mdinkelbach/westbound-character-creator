const { Schema, model } = require('mongoose');

const Equipment = require('./Equipment')

const packSchema = new Schema({
    packName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    equipments: [Equipment.schema]
});

const Pack = model('Pack', packSchema);

module.exports = Pack;