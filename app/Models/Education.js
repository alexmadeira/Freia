'use strict'

const Model = use('Model')

class Education extends Model {
  logo () {
    return this.belongsTo('App/Models/File', 'logo_id', 'id')
  }
}

module.exports = Education
