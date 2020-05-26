'use strict'

const Order = use('App/Models/Order')
const Product = use('App/Models/Product')
const User = use('App/Models/User')

class OrderProductController {

  async show({auth, response}) {

    let orders = await Order.all()
    return response.json(orders)
  }

}

module.exports = OrderProductController


  [
  {
    "id": 1,
    "user_id": 1,
    "order_number": "0001",
    "created_at": "2020-05-26 22:23:14",
    "updated_at": "2020-05-26 22:23:14"
  }
  ]
