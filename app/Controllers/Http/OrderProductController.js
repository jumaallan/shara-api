'use strict'

const Order = use('App/Models/Order')
const Product = use('App/Models/Product')
const User = use('App/Models/User')

class OrderProductController {

  async index({response}) {

    const orders = await Order
      .query()
      .with('product')
      .fetch()

    return response.json(orders)
  }

}

module.exports = OrderProductController
