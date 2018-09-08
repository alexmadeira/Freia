'use strict'
const Project = use('App/Models/Project')

class ProjectController {
  async index () {
    const project = await Project.query()
      .with('agency')
      .with('agency.image')
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

  async show ({ params }) {
    const { slug } = params
    const project = await Project.findByOrFail('slug', slug)

    await project.load('agency.image')
    await project.load('logo')
    await project.load('background')
    await project.load('preview')
    await project.load('destaque')
    await project.load('produtoDestaque')
    await project.load('destaqueEsquerda')
    await project.load('destaqueCentro')
    await project.load('destaqueDireita')

    return project
  }

  async update ({ params, request }) {
    const project = await Project.findOrFail(params.id)
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

    project.merge(data)
    await project.save()

    return project
  }
  async destroy ({ params }) {
    const project = await Project.findOrFail(params.id)

    await project.delete()
  }
}

module.exports = ProjectController
