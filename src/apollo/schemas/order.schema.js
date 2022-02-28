const { gql } = require('apollo-server-express');

module.exports = gql`
    type Order {
        id: ID
        amount: Int
        date: String
        stripeId:String
        status: String
        user: User
        products:[Product]
    }
    extend type Query {
        getOrders:[Order]
        getOrder(id:ID): Order
    }
`