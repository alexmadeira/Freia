'use strict'

const Model = use('Model')
const slugify = require('slugify')

class Project extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async projetcInstance => {
      if (projetcInstance.dirty.name) {
        projetcInstance.slug = slugify(projetcInstance.dirty.name, {
          lower: true
        })
      }
    })
  }

  agency () {
    return this.belongsTo('App/Models/Agency')
  }
  nextProject () {
    return this.belongsTo('App/Models/Project', 'nextProject_id', 'id')
  }
  logo () {
    return this.belongsTo('App/Models/File', 'logo_id', 'id')
  }
  background () {
    return this.belongsTo('App/Models/File', 'background_id', 'id')
  }
  preview () {
    return this.belongsTo('App/Models/File', 'preview_id', 'id')
  }
  destaque () {
    return this.belongsTo('App/Models/File', 'destaque_id', 'id')
  }
  produtoDestaque () {
    return this.belongsTo('App/Models/File', 'produtoDestaque_id', 'id')
  }
  destaqueEsquerda () {
    return this.belongsTo('App/Models/File', 'destaqueEsquerda_id', 'id')
  }
  destaqueCentro () {
    return this.belongsTo('App/Models/File', 'destaqueCentro_id', 'id')
  }
  destaqueDireita () {
    return this.belongsTo('App/Models/File', 'destaqueDireita_id', 'id')
  }
}

module.exports = Project
