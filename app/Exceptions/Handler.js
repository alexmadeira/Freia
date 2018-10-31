'use strict'
const Sentry = require('@sentry/node')

const Config = use('Config')
const Env = use('Env')
// const Youch = use('Youtch')
const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    response.status(error.status).send(error.message)
    if (error.name === 'Validation.Exception') {
      return response.status(error.status).send(error.message)
    }

    if (Env.get('NODE_ENV') === 'development') {
      // const youch = new Youch(error, request.request)
      // const errorJSON = await youch.toJSON()
      // return response.status(error.status).send(errorJSON)
    }

    return response.status(error.status)
  }

  async report (error, { request }) {
    Sentry.init(Config.get('services.sentry.dsn'))
    Sentry.captureException(error)
  }
}

module.exports = ExceptionHandler
