const { Schema, model } = require('mongoose');

const equipmentSchema = new Schema({
    equipmentName: {
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

const Equipment = model('Equipment', equipmentSchema);

module.exports = Equipment;