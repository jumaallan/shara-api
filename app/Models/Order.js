'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  static get table () {
    return 'orders'
  }

  static get primaryKey() {
    return 'id'
  }
}

module.exports = Order

// products () {
//   return this.hasMany('App/Models/Product')
// }
