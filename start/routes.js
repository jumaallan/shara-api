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
  return {welcome: 'Welcome to Shara API'}
})

Route.group(() => {

  // user authentication - login && register
  Route.post('/register', 'UserController.signup')
  Route.post('/login', 'UserController.login')

  // grouping anything order here
  Route.post('order', 'OrderController.store')
  Route.get('order', 'OrderController.index')
  Route.get('order/:id', 'OrderController.show')

  // grouping anything product here
  Route.post('product', 'ProductController.store')
  Route.get('product', 'ProductController.index')
  Route.get('product/:id', 'ProductController.show')

}).prefix('api/v1')
