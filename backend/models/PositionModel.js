const{model, Schema} = require('mongoose');
const PositionSchema = require('../schema/PostitionSchema');

const PositionModel = new model('position', PositionSchema);

module.exports = PositionModel;