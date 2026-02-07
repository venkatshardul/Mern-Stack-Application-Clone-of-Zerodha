const {model, Schema} = require('mongoose');
const OrdersSchema = require('../schema/OrdersSchema');

const OrderModel = new model('order', OrdersSchema);

module.exports = OrderModel;    