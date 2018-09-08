'use strict'

const Model = use('Model')

class Agency extends Model {
  image () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Agency
