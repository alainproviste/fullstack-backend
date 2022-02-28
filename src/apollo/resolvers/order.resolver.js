const Order = require('../../models/order.model');

module.exports = {
    Query: {
        getOrders: (parent, args, context) => {
            console.log(context)
            return Order.find().populate('user').populate('products');
        },
        getOrder(parent, args, context) {
            return Order.findById(args.id).populate('user').populate('products');
        }
    }
}