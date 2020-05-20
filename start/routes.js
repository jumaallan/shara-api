'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { welcome: 'Welcome to Shara API' }
})

Route.group(() => {
  Route.post('order', 'OrderController.store')
  Route.get('order', 'OrderController.index')
  Route.get('order/:id', 'OrderController.show')
  Route.put('order/:id', 'OrderController.update')
  Route.delete('order/:id', 'OrderController.delete')
}).prefix('api/v1')
