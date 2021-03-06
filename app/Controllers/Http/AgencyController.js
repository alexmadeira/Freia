'use strict'
const Agency = use('App/Models/Agency')

class AgencyController {
  async index ({ request }) {
    const { order } = request.get()

    const agencyQuery = Agency.query()
      .with('image')
      .with('logo')

    if (order) {
      const arrayOrder = order.split(':')
      agencyQuery.orderBy(arrayOrder[0], arrayOrder[1])
    }

    const agency = await agencyQuery.fetch()

    return agency
  }

  async store ({ request }) {
    const data = request.only([
      'file_id',
      'name',
      'description',
      'role',
      'roleDescription',
      'logo_id',
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
      'roleDescription',
      'logo_id',
      'enter',
      'exit'
    ])

    agency.merge(data)
    await agency.save()

    return agency
  }

  async show ({ params }) {
    const { id } = params
    const agency = await Agency.findByOrFail('id', id)

    await agency.load('image')
    await agency.load('logo')

    return agency
  }

  async destroy ({ params }) {
    const agency = await Agency.findOrFail(params.id)

    await agency.delete()
  }
}

module.exports = AgencyController
