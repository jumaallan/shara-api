'use strict'

const Product = use('App/Models/Product')

class ProductController {

  async index({response}) {
    let products = await Product.all()
    return response.json(products)
  }

  async show({params, response}) {
    const product = await Product.find(params.id)
    return response.json(product)
  }

  async store({request, response}) {
    const productInfo = request.only(['order_id', 'name', 'price', 'uom'])

    const product = new Product()
    product.order_id = productInfo.order_id
    product.name = productInfo.name
    product.price = productInfo.price
    product.uom = productInfo.uom

    await product.save()

    return response.status(201).json(product)
  }

}

module.exports = ProductController
