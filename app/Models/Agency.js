'use strict'

const Model = use('Model')

class Agency extends Model {
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Agency
