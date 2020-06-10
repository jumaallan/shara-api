'use strict'

const Order = use('App/Models/Order')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

class OrderController {

  async index({response}) {
    let orders = await Order.all()
    return response.json(orders)
  }

  async show({params, response}) {
    const order = await Order.find(params.id)
    return response.json(order)
  }

  async store({request, auth, response}) {

    const orderInfo = request.only(['order_number', auth.current.user.id])

    const order = new Order()
    order.order_number = orderInfo.order_number
    order.user_id = orderInfo.user_id

    await order.save()

    // send message to the user
    client.messages
      .create({
        body: 'Your Order has been saved successfully',
        from: process.env.TWILIO_FROM,
        to: '+254797435901'
      })
      .then(message => console.log(message.sid));

    // send email via Amazon SES

    return response.status(201).json(order)
  }

}

module.exports = OrderController
