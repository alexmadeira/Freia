'use strict'
const Agency = use('App/Models/Agency')

class AgencyController {
  async index () {
    const agency = await Agency.query()
      .with('file')
      .fetch()

    return agency
  }

  async store ({ request }) {
    const data = request.only([
      'file_id',
      'name',
      'description',
      'role',
      'enter',
      'exit'
    ])
    const agency = await Agency.create(data)

    return agency
  }
  async update ({ params, request, response }) {}
  async destroy ({ params, request, response }) {}
}

module.exports = AgencyController
