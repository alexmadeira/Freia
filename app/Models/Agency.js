'use strict'

const Model = use('Model')

class Agency extends Model {
  image () {
    return this.belongsTo('App/Models/File')
  }
  logo () {
    return this.belongsTo('App/Models/File', 'logo_id', 'id')
  }
}

module.exports = Agency
