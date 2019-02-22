'use strict'
const Education = use('App/Models/Education')

class EducationController {
  async index ({ request }) {
    const { order } = request.get()

    const educationQuery = Education.query().with('logo')

    if (order) {
      const arrayOrder = order.split(':')
      educationQuery.orderBy(arrayOrder[0], arrayOrder[1])
    }

    const education = await educationQuery.fetch()

    return education
  }

  async store ({ request }) {
    const data = request.only(['logo_id', 'name', 'description'])
    const education = await Education.create(data)

    return education
  }

  async show ({ params }) {
    const { id } = params
    const education = await Education.findByOrFail('id', id)

    await education.load('logo')

    return education
  }

  async update ({ params, request }) {
    const education = await Education.findOrFail(params.id)
    const data = request.only(['logo_id', 'name', 'description'])

    education.merge(data)
    await education.save()

    return education
  }

  async destroy ({ params }) {
    const education = await Education.findOrFail(params.id)

    await education.delete()
  }
}

module.exports = EducationController
