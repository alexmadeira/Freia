'use strict'
const Project = use('App/Models/Project')

class ProjectController {
  async index () {
    const project = await Project.query()
      .with('agency')
      .with('logo')
      .with('background')
      .with('preview')
      .with('destaque')
      .with('produtoDestaque')
      .with('destaqueEsquerda')
      .with('destaqueCentro')
      .with('destaqueDireita')
      .fetch()

    return project
  }
  async store ({ request }) {
    const data = request.only([
      'name',
      'description',
      'longDescription',
      'backgroundColor',
      'previewColor',
      'agency_id',
      'logo_id',
      'background_id',
      'preview_id',
      'destaque_id',
      'produtoDestaque_id',
      'destaqueEsquerda_id',
      'destaqueCentro_id',
      'destaqueDireita_id'
    ])
    const project = await Project.create(data)

    return project
  }
  async show ({ params, request, response, view }) {}
  async update ({ params, request, response }) {}
  async destroy ({ params, request, response }) {}
}

module.exports = ProjectController
