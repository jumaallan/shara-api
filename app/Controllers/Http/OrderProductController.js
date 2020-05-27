'use strict'

const Order = use('App/Models/Order')
const Product = use('App/Models/Product')
const User = use('App/Models/User')

class OrderProductController {

  async index({response}) {

    const orders = await Order.all()
    const products = []

    for (let order of orders) {
      const orderProducts = await order.product().fetch()
      products.push(orderProducts)
    }

    return response.json(orders)
  }

}

module.exports = OrderProductController
