'use strict'
const Agency = use('App/Models/Agency')

class AgencyController {
  async index () {
    const agency = await Agency.query()
      .with('image')
      .fetch()

    return agency
  }

  async store ({ request }) {
    const data = request.onsly([
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
  async update ({ params, request }) {
    const agency = await Agency.findOrFail(params.id)
    const data = request.only([
      'file_id',
      'name',
      'description',
      'role',
      'enter',
      'exit'
    ])

    agency.merge(data)
    await agency.save()

    return agency
  }
  async destroy ({ params }) {
    const agency = await Agency.findOrFail(params.id)

    await agency.delete()
  }
}

module.exports = AgencyController
