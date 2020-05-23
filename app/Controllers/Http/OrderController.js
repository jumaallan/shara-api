'use strict'

const Order = use('App/Models/Order')

class OrderController {

  async index({response}) {
    let orders = await Order.all()
    return response.json(orders)
  }

  async show({params, response}) {
    const order = await Order.find(params.id)
    return response.json(order)
  }

  async store({request, response}) {
    const orderInfo = request.only(['order_number', 'user_id'])

    const order = new Order()
    order.order_number = orderInfo.order_number
    order.user_id = orderInfo.user_id

    await order.save()

    return response.status(201).json(order)
  }

}

module.exports = OrderController
