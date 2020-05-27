'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  order() {
    return this.belongsTo('App/Models/Order')
  }

  static get table() {
    return 'products'
  }

  static get primaryKey() {
    return 'id'
  }
}

module.exports = Product
