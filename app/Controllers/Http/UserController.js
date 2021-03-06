'use strict'

const User = use('App/Models/User')

class UserController {

  async signup({request, auth, response}) {
    const userData = request.only(['name', 'phone_number', 'email', 'password'])
    try {
      const user = await User.create(userData)
      // generate JWT token for user
      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: error.message
      })
    }
  }

  async login({request, auth, response}) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      response.status(400).json({
        status: 'error',
        message: 'Invalid email/password'
      })
    }
  }

}

module.exports = UserController
