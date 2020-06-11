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

    const orderInfo = request.only(['order_number'])

    try {
      let user = await auth.getUser()

      const order = new Order()
      order.order_number = orderInfo.order_number
      order.user_id = user.id

      await order.save()

      // send message to the user
      client.messages
        .create({
          body: 'Hi ' + user.name + '. Your Order # ' + order.order_number + ' has been saved successfully',
          from: process.env.TWILIO_FROM,
          to: user.phone_number
        })
        .then(message => console.log(message.sid));

      return response.status(201).json(order)

    } catch (e) {
      console.log('Token invalid')
    }
  }

}

module.exports = OrderController
