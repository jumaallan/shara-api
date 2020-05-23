'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.integer('order_id').nullable()
      table.string('name').nullable()
      table.string('price').nullable()
      table.string('uom').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
