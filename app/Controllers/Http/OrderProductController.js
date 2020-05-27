'use strict'

const Order = use('App/Models/Order')

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
