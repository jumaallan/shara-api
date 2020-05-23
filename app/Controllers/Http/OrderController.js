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

  async update({params, request, response}) {
    const orderInfo = request.only(['order_number', 'user_id'])

    const order = await Order.find(params.id)
    if (!order) {
      return response.status(404).json({data: 'Order not found'})
    }
    order.product = orderInfo.product
    order.name = orderInfo.name
    order.price = orderInfo.price
    order.amount = orderInfo.amount

    await order.save()

    return response.status(200).json(order)
  }

  async delete({params, response}) {
    const order = await Order.find(params.id)
    if (!order) {
      return response.status(404).json({data: 'Order not found'})
    }
    await order.delete()

    return response.status(204).json(null)
  }
}

module.exports = OrderController
