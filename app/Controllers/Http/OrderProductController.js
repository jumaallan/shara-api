'use strict'

const Order = use('App/Models/Order')
const Product = use('App/Models/Product')
const User = use('App/Models/User')

class OrderProductController {

  async show({auth, response}) {

    const user = await User.find(auth.current.user.id)

    let orders = await Order.all()
    return response.json(user)
  }

}

module.exports = OrderProductController
